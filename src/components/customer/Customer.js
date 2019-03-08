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
        let listCustomers = []
        let idCounter = 0
        getCustomers()
            .then(response => {
                listCustomers = response.data.content.map(customer => {
                    idCounter += 1
                    return { ...customer, id: idCounter }
                })
                console.log(listCustomers)
                this.setState({ customers: listCustomers })
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
            <div className="container">
                <div className=" customer-action-container">
                    <NewCustomer getCustomers={this.getCustomers} />
                </div>
                <CustomerList 
                    selectCustomers={this.setSelectedCustomers} 
                    customers={this.state.customers} 
                    deleteFromList={this.deleteFromList}/>
            </div>
        )
    }
}

export default Customer;