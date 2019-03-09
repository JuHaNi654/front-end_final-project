import React, { Component } from 'react';
import CustomerList from './CustomerList';
import './Customer.css';
import NewCustomer from './NewCustomer';


import {getCustomers} from '../ServerCalls.js'




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
        getCustomers()
            .then(response => {
                this.setState({
                    customers: response.data.content
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    deleteFromList = (value) => {
        const newList = this.state.customers.filter((customer) => customer.id !== value)
        this.setState({
            customers: newList
        })
    }

    render() {
        return (
            <div className="container box">
                <div className=" customer-action-container">
                    <NewCustomer getCustomers={this.getCustomers} />
                </div>
                <CustomerList 
                    selectCustomers={this.setSelectedCustomers} 
                    customers={this.state.customers} 
                    getCustomers={this.getCustomers}/>
            </div>
        )
    }
}

export default Customer;