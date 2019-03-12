import React, { Component } from 'react'
import {saveTraining} from '../ServerCalls.js'

export class TrainingForm extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      date: '',
      duration: 0,
      activity: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const newTraining = {
      date: this.state.date,
      duration: this.state.duration,
      activity: this.state.activity
    }

    saveTraining(newTraining)
      .then(response => {
        this.props.getTraining()
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
            <label htmlFor="date">Date</label>
            <input type="date" className="form-control" id="date" 
            name="date" value={this.state.date} onChange={this.handleChange}/>
            <label htmlFor="time">Duration in minutes</label>
            <input type="number" className="form-control" id="time" 
            name="duration" value={this.state.duration} onChange={this.handleChange}/>
            <label htmlFor="activity">Training activity</label>
            <input type="text" className="form-control" id="activity"
            name="activity" value={this.state.activity} onChange={this.handleChange}/>
            <input type="submit" className="btn create_training_button" value="Create new training activity" />
        </form>
      </div>
    )
  }
}

export default TrainingForm
