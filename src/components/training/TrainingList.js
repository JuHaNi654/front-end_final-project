import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import DeleteTraining from './DeleteTraining';
import './Training.css';

export class TrainingList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showInput: false,
            date: '',
            duration: '',
            activity: '',
            firstname: '',
            lastname: ''
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
    | Filtering training function filters training
    | list if there are data in the filter input fields.
    | If there is not it returns full training list
    |--------------------------------------------------
    */
    filterTraining = () => {
        let newFilter = this.props.training
        let date = this.state.date.split("-")
        if (this.state.date) {
            newFilter = newFilter.filter(training => {
                let dateValue = training.date.split("/")
                return date[0] === dateValue[0]
            })
            newFilter = newFilter.filter(training => {
                let dateValue = training.date.split("/")
                return date[1] === dateValue[1]
            })
            newFilter = newFilter.filter(training => {
                let dateValue = training.date.split("/")
                return date[2] === dateValue[2]
            })
        }

        if (this.state.duration > 0) {
            newFilter = newFilter.filter(training => {
                return training.duration === this.state.duration
            })
        }

        if (this.state.activity.length > 0) {
            newFilter = newFilter.filter(training => {
                return training.activity.toLowerCase().includes(this.state.activity.toLowerCase())
            })
        }
        if (this.state.firstname.length !== 0) {
            newFilter = newFilter.filter(training => {
                return training.customer.firstname.toLowerCase().includes(this.state.firstname.toLowerCase()) 
            })
        }
        if (this.state.lastname.length !== 0) {
            newFilter = newFilter.filter(training => {
                return training.customer.lastname.toLowerCase().includes(this.state.lastname.toLowerCase()) 
            })
        }

        return newFilter
    }
    /**
    |--------------------------------------------------
    | Open/Close filtering input boxes
    |--------------------------------------------------
    */
    chanceInput = () => {
        this.setState(prevState => {
            return { showInput: !prevState.showInput }
        })
    }
    /**
    |--------------------------------------------------
    | Clears filtering input boxes
    |--------------------------------------------------
    */
    clearInput = () => {
        this.setState({
            date: '',
            duration: 0,
            activity: ''
        })
    }
    render() {
        /**
        |--------------------------------------------------
        | React-table columns setting, wich is specifed
        | what data is showed in the table
        |--------------------------------------------------
        */
        const columns = [{
            Header: 'Training',
            columns: [
                {
                    Header: 'Date',
                    accessor: 'date'
                },
                {
                    Header: 'Duration',
                    accessor: 'duration'
                },
                {
                    Header: 'Activity',
                    accessor: 'activity'
                }]
        }, {
            Header: 'Customer',
            columns: [
                {
                    Header: 'Firstname',
                    accessor: 'customer.firstname'
                }, {
                    Header: 'Lastname',
                    accessor: 'customer.lastname'
                }, {
                    Cell: ({ original }) => {
                        return (
                            <DeleteTraining trainingId={original.id} getTraining={this.props.getTraining} />
                        )
                    }
                }
            ]
        }]
        return (
            <div>
                <button onClick={this.chanceInput} className="btn search_button"
                    data-toggle="collapse" data-target="#searchBox">
                    {this.state.showInput ? 'Close search' : 'Open Search'}
                </button>
                <div id="searchBox" className="collapse">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label htmlFor="inputDate">Date: </label>
                                <input type="date" className="form-control" id="inputDate"
                                    value={this.state.date} name="date" onChange={this.handleChange} />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="time">Duration in minutes</label>
                                <input type="text" className="form-control" id="time"
                                    name="duration" value={this.state.duration} onChange={this.handleChange} />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="activity">Training activity</label>
                                <input type="text" className="form-control" id="activity"
                                    name="activity" value={this.state.activity} onChange={this.handleChange} />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputFirstname">Firstname: </label>
                                <input type="text" className="form-control" id="inputFirstname" placeholder="Firstname"
                                    value={this.state.firstname} name="firstname" onChange={this.handleChange} />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="inputLastname">Lastname: </label>
                                <input type="text" className="form-control" id="inputLastname" placeholder="Lastname"
                                    value={this.state.lastname} name="lastname" onChange={this.handleChange} />
                            </div>
                        </div>
                    </form>
                    <button onClick={this.clearInput} className="btn clear_button">Empty filters</button>
                </div>
                <ReactTable data={this.filterTraining()} columns={columns}
                    sortable={true} defaultPageSize={10} className="-highlight" />
            </div>
        )
    }
}




export default TrainingList