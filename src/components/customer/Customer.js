import React, { Component } from 'react';
import CustomerList from './CustomerList';
import './Customer.css';
import axios from 'axios';


class Customer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customers: [],
            name: ''
        }
    }
    componentDidMount() {
        axios.get('')
            .then(response => {
                this.setState({ customers: response.data.content })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="container">
                <CustomerList customers={this.state.customers} />
            </div>
        )
    }
}

export default Customer;