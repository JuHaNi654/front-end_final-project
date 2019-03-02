import React, { Component } from 'react';
import TrainingList from './TrainingList';
import axios from 'axios';


class Training extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trainingList: []
        }
    }

    componentDidMount() {
        axios.get('')
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
            <div className="container">
                <TrainingList training={this.state.trainingList}/>
            </div>
        )
    }
}

export default Training;