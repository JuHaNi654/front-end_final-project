import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './Training.css';


const CustTraining = (props) => {
    let enrolledCustomers
    if (props.enrolledCustomers !== null) {
        enrolledCustomers = [props.enrolledCustomers]
    }

    const columns = [{
        Header: 'Enrolled Customers',
        columns: [
            {
                Header: 'Firstname',
                accessor: 'firstname',
            },
            {
                Header: 'Lastname',
                accessor: 'lastname',
            }
        ]
    }]
    return (
        <div className="container CustTraining_styles">
            <ReactTable data={enrolledCustomers} columns={columns}
                sortable={true} minRows={3} 
                showPaginationBottom={false}/>
        </div>
    )
}

export default CustTraining