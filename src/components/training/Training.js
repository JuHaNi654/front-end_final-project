import React, { PureComponent } from 'react';
import TrainingList from './TrainingList';
import { getTraining } from '../ServerCalls.js';
import moment from 'moment';
import './Training.css';

class Training extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            trainingList: []
        }
    }
    /**
    |--------------------------------------------------
    | Call functions before rendering
    |--------------------------------------------------
    */
    componentDidMount() {
        this.getTraining()
    }

    /**
    |--------------------------------------------------
    | Get listed trainings api call
    | and format date from listed training
    |--------------------------------------------------
    */
    getTraining = () => {
        getTraining()
            .then(response => {
                let data = response.data
                data.forEach(training => training.date = moment(training.date).format("YYYY/MM/DD"))
                this.setState({
                    trainingList: data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div className="container training_container">
                <TrainingList training={this.state.trainingList} getTraining={this.getTraining}/>
            </div>
        )
    }
}

export default Training;