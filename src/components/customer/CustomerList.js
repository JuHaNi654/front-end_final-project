import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import DeleteCustomer from './DeleteCustomer';


class CustomerList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            street: '',
            city: '',
            postcode: '',
            showInput: false
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => this.filterCustomers())
    }


    filterCustomers = () => {
        let newFilter = this.props.customers
        if (this.state.firstname.length !== 0) {
            newFilter = newFilter.filter(customer => {
                return customer.firstname.toLowerCase().includes(this.state.firstname.toLowerCase()) 
            })
        }
        if (this.state.lastname.length !== 0) {
            newFilter = newFilter.filter(customer => {
                return customer.lastname.toLowerCase().includes(this.state.lastname.toLowerCase()) 
            })
        }
        if (this.state.email.length !== 0) {
            newFilter = newFilter.filter(customer => {
                return customer.email.toLowerCase().includes(this.state.email.toLowerCase()) 
            })
        }
        if (this.state.phone.length !== 0) {
            newFilter = newFilter.filter(customer => {
                return customer.phone.includes(this.state.phone) 
            })
        }
        if (this.state.street.length !== 0) {
            newFilter = newFilter.filter(customer => {
                return customer.street.toLowerCase().includes(this.state.street.toLowerCase()) 
            })
        }
        if (this.state.city.length !== 0) {
            newFilter = newFilter.filter(customer => {
                return customer.city.toLowerCase().includes(this.state.city.toLowerCase()) 
            })
        }
        if (this.state.postcode.length !== 0) {
            newFilter = newFilter.filter(customer => {
                return customer.postcode.toLowerCase().includes(this.state.postcode.toLowerCase()) 
            })
        }
 
        return newFilter
    }


    chanceInput = () => {
        this.setState(prevState => {
            return { showInput: !prevState.showInput }
        })
    }

    clearInput = () => {
        this.setState({
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            street: '',
            city: '',
            postcode: ''
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
                <div>
                    <button onClick={this.chanceInput} className="btn search_button" data-toggle="collapse" data-target="#searchBox">
                        {this.state.showInput ? 'Close search' : 'Open Search'}
                    </button>
                    <div id="searchBox" className="collapse">
                        <div className="container search_container">
                            <form>
                                <div className="form-row">
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

                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail">Email: </label>
                                        <input type="text" className="form-control" id="inputEmail" placeholder="Email"
                                            value={this.state.email} name="email" onChange={this.handleChange} />
                                    </div>

                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputPhone">Phone: </label>
                                        <input type="text" className="form-control" id="inputPhone" placeholder="Phone"
                                            value={this.state.phone} name="phone" onChange={this.handleChange} />
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputStreetAddress">Streetaddress: </label>
                                        <input type="text" className="form-control" id="inputStreetAddress" placeholder="Streetaddress"
                                            value={this.state.street} name="street" onChange={this.handleChange} />
                                    </div>

                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputCity">City: </label>
                                        <input type="text" className="form-control" id="inputCity" placeholder="City"
                                            value={this.state.city} name="city" onChange={this.handleChange} />
                                    </div>

                                    <div className="form-group col-md-2">
                                        <label htmlFor="inputPostcode">Postcode: </label>
                                        <input type="text" className="form-control" id="inputPostcode" placeholder="Postcode"
                                            value={this.state.postcode} name="postcode" onChange={this.handleChange} />
                                    </div>
                                </div>
                            </form>
                            <button onClick={this.clearInput} className="btn clear_button">Empty filters</button>
                        </div>
                    </div>
                </div>
                <ReactTable data={this.filterCustomers()} columns={columns}
                    sortable={true} defaultPageSize={10}
                    className="-highlight" />
            </div>
        )
    }

}

export default CustomerList