import React, { Component } from 'react';
import { saveTraining } from '../ServerCalls.js';
import './Training.css';

export class TrainingForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
      duration: 0,
      activity: ''
    }
  }
  /**
  |--------------------------------------------------
  | Set state by given input data
  |--------------------------------------------------
  */
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  /**
  |--------------------------------------------------
  | On submit creates new training object with 
  | customer id link as foreign key and save to the
  | database
  |--------------------------------------------------
  */
  handleSubmit = (event) => {
    event.preventDefault()

    const newTraining = {
      date: this.state.date,
      duration: this.state.duration,
      activity: this.state.activity,
      customer: this.props.customerData
    }

    saveTraining(newTraining)
      .then(response => {
        this.props.setModal()
      })
      .catch(err => {
        console.log(err)
      })

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input type="date" className="form-control" id="date"
              name="date" value={this.state.date} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="time">Duration in minutes</label>
            <input type="number" className="form-control" id="time"
              name="duration" value={this.state.duration} onChange={this.handleChange} />
          </div>
          <div className="form-group ">
            <label htmlFor="activity">Training activity</label>
            <input type="text" className="form-control" id="activity"
              name="activity" value={this.state.activity} onChange={this.handleChange} />
          </div>

          <input type="submit" className="btn create_training_button" value="Create new training activity" />
        </form>
      </div>
    )
  }
}

export default TrainingForm
