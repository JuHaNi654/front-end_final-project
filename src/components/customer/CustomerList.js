import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

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
                newSelect[customer.firstname] = true
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
                    Header: checkAll => {
                        return (
                            <input type="checkbox" checked={this.state.selectAll === 1}
                            ref={input => {
                                if (input) {
                                    input.indeterminate = this.state.selectAll === 2
                                }
                            }}
                            onChange={this.toggleAll} />
                        )
                    },
                    Cell: ({ original }) => {
                        return (
                            <input type="checkbox" checked={this.state.selected[original.id] === true}
                            onChange={() => this.toggleRow(original.id)} />
                        )
                    }
                },  {
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