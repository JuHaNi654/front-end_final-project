import React, { Component } from 'react';
import TrainingList from './TrainingList';
import { getTraining } from '../ServerCalls.js'

class Training extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trainingList: []
        }
    }

    componentDidMount() {
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
        return(
            <div className="container training_container">
                <TrainingList training={this.state.trainingList}/>
            </div>
        )
    }
}

export default Training;