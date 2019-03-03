import React, { Component } from 'react';
import CustomerList from './CustomerList';
import './Customer.css';
import axios from 'axios';
import NewCustomer from './NewCustomer';
import DeleteCustomer from './DeleteCustomer';




class Customer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customers: [],
            selectedCustomers: [],
            name: '',
            deleteAlert: false,
        }
    }


    componentDidMount() {
        this.getCustomers()
    }

    setSelectedCustomers = (value) => {
        this.setState({ selectedCustomers: value })
    }
    getCustomers = () => {
        let listCustomers = []
        let idCounter = 0
        axios.get('')
            .then(response => {
                listCustomers = response.data.content.map(customer => {
                    idCounter += 1
                    return { ...customer, id: idCounter }
                })
                this.setState({ customers: listCustomers })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="container">
                <div className="btn-group" role="group">
                    <NewCustomer getCustomers={this.getCustomers} />
                    <DeleteCustomer />
                </div> <br />
                <CustomerList selectCustomers={this.setSelectedCustomers} customers={this.state.customers} />
            </div>
        )
    }
}

export default Customer;