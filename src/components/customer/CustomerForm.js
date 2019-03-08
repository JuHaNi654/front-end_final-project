import React from 'react';
import { saveCustomer } from '../ServerCalls.js'


class CustomerForm extends React.Component {
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
            checked: false
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleChecked = () => {
        this.setState((prevState) => {
            return { checked: !prevState.checked }
        })
    }
    handeSubmit = (event) => {
        event.preventDefault()

        const newCustomer = {
            id: 9,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            streetaddress: this.state.street,
            postcode: this.state.postcode,
            city: this.state.city,
            email: this.state.email,
            phone: this.state.phone
        }

        if (this.state.checked === true) {
            saveCustomer(newCustomer)
                .then(response => {
                    this.props.getCustomers();
                })
                .catch(err => {
                    console.log(err)
                })
        }

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handeSubmit}>
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
                    <input type="submit" className="btn btn-primary" value="Create new customer" />
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="informationCheck"
                            value={this.state.checked} onChange={this.handleChecked} />
                        <label className="form-check-label" htmlFor="informationCheck">I have checked given information</label>
                    </div>

                </form>
            </div>
        )
    }
}

export default CustomerForm;