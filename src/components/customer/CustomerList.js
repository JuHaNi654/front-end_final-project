import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import DeleteCustomer from './DeleteCustomer';

class CustomerList extends React.Component {
    render() {
        const columns = [{
            Header: 'Customers',
            columns: [{
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
                accessor: 'phone',
            }, {
                Cell: ({ original }) => {
                    return (
                        <DeleteCustomer deleteCustomerLink={original.links[0].href} getCustomers={this.props.getCustomers} />
                    )
                }
            }]
        }]


        return (
            <div>
                <ReactTable data={this.props.customers} columns={columns}
                    sortable={true} defaultPageSize={10}
                    className="-highlight" />
            </div>
        )
    }

}

export default CustomerList