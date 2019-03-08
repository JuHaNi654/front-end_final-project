import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import DeleteCustomer from './DeleteCustomer';

class CustomerList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: [],
            selectAll: 0
        }
    }

    toggleRow = (value) => {
        let newSelect = Object.assign({}, this.state.selected)
        newSelect[value] = !this.state.selected[value]
        this.props.selectCustomers(newSelect)
        this.setState({
            selected: newSelect,
            selectAll: 2
        })
    }

    toggleAll = () => {
        let newSelect = {}
        if (this.state.selectAll === 0) {
            this.props.customers.forEach(customer => {
                newSelect[customer.id] = true
            })
        }
        this.props.selectCustomers(newSelect)
        this.setState({
            selected: newSelect,
            selectAll: this.state.selectAll === 0 ? 1 : 0
        })
    }

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
                accessor: 'phone'
            }, {
                Cell: ({ original }) => {
                    return (
                        <DeleteCustomer customerId={original.id} deleteFromList={this.props.deleteFromList} />
                    )
                }
            }
            ]
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