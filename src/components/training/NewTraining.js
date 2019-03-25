import React, { Component } from 'react';
import Modal from 'react-modal';
import TrainingForm from './TrainingForm';
import './Training.css';

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

export class NewTraining extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: false
        }
    }
    /**
    |--------------------------------------------------
    | Opens new customer format window
    |--------------------------------------------------
    */
    setModal = () => {
        this.setState(prevState => {
            return { modalIsOpen: !prevState.modalIsOpen }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.setModal} className="btn newTraining_button">New Activity</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.setModal}
                    style={customStyles} >

                    <div className="Modal_style">
                        <button className="btn close_button" onClick={this.setModal}>X</button>
                        <h2>Create new training to the customer</h2>
                        <TrainingForm customerData={this.props.customerData} setModal={this.setModal}/>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default NewTraining
