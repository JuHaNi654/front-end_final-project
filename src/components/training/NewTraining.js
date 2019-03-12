import React, { Component } from 'react'
import Modal from 'react-modal'
import TrainingForm from './TrainingForm';

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
    setModal = () => {
        this.setState(prevState => {
            return { modalIsOpen: !prevState.modalIsOpen }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.setModal} className="btn newTraining_button">Create new training activity</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles} >

                    <div className="Modal_style">
                        <button className="btn close_button" onClick={this.setModal}>X</button>
                        <h2>Create new new training</h2>
                        <TrainingForm getTraining={this.props.getTraining} setModal={this.setModal}/>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default NewTraining
