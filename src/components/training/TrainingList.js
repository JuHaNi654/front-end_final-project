import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import CustTraining from './CustTraining';
import DeleteTraining from './DeleteTraining';
var moment = require('moment');

const TrainingList = (props) => {
    props.training.forEach(training => training.date = moment(training.date).format("DD/MM/YYYY"))
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
            },
            {
                Cell: ({ original }) => {
                    return (
                        <DeleteTraining trainingId={original.id} getTraining={props.getTraining}/>
                    )
                }
            }
        ]
    }]

    return (
        <div>
            <div>
                <ReactTable data={props.training} columns={columns}
                    sortable={true} defaultPageSize={10} className="-highlight"
                    SubComponent={({ original }) => {
                        return (
                            <CustTraining enrolledCustomers={original.customer} />
                        );
                    }} />
            </div>
        </div>
    )
}

export default TrainingList