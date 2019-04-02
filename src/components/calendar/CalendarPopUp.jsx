import React, { Component } from 'react'
import Modal from 'react-modal';
import './CalendarPopUp.css'

/**
|--------------------------------------------------
| Pop-up Modal window style settings
|--------------------------------------------------
*/
const customStyles = {
    content: {
        width: '60%',
        height: '60%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};

export class CalendarPopUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: false
        }
    }

    setModal = () => {
        this.setState(prevState => {
            return { modalIsOpen: !prevState.modalIsOpen }
        })
    }

    render() {
        const showListedTrainings = this.props.activities.map((training, index) => {
            return (
              <div key={index} className="training_list_styles">
                <p>
                  Activity: {training.activity} - Duration: {training.duration} <br />
                  Customer: {training.customer.firstname} {training.customer.lastname}
                </p>
              </div>
            )
          })
        return (
            <div> 
                <span onClick={this.setModal}>Training: {this.props.activities.length}</span>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.setModal}
                    style={customStyles} >

                    <div className="C_Modal_style ">
                        <button className="btn close_button" onClick={this.setModal}>X</button>
                        <h2>Reserved trainings on selected date</h2>
                        <div>
                            {showListedTrainings}
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default CalendarPopUp
