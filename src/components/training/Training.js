import React, { Component } from 'react';
import TrainingList from './TrainingList';
import { getTraining } from '../ServerCalls.js'
import NewTraining from './NewTraining';

class Training extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trainingList: []
        }
    }

    componentDidMount() {
        this.getTraining()
    }

    getTraining = () => {
        getTraining()
            .then(response => {
                this.setState({
                    trainingList: response.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div className="container training_container">
                <div className="training_action_container">
                    <NewTraining getTraining={this.getTraining}/>
                    <TrainingList training={this.state.trainingList} getTraining={this.getTraining}/>
                </div>
            </div>
        )
    }
}

export default Training;