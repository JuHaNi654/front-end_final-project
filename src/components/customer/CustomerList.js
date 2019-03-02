import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

const CustomerList = (props) => {

    const columns = [{
        Header: 'Firstname',
        accessor: 'firstname'
    }, {
        Header: 'Lastname',
        accessor: 'lastname'
    }, {
        Header: 'Streetaddress',
        accessor: 'streetaddress'
    }, {
        Header: 'Postcode',
        accessor: 'postcode'
    }, {
        Header: 'City',
        accessor: 'city'
    }, {
        Header: 'Email',
        accessor: 'email'
    }, {
        Header: 'Phone',
        accessor: 'phone'
    }]
    return (
        <div>
            <ReactTable data={props.customers} columns={columns}
                sortable={true} defaultPageSize={10} />
        </div>
    )
}

export default CustomerList