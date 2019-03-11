import React from 'react';
import Modal from 'react-modal'
import CustomerForm from './CustomerForm';

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


class NewCustomer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: false
        }
    }
    openModal = () => {
        this.setState({ modalIsOpen: true })
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false })
    }
    render() {
        return (
            <div>
                <button className="btn newCustomer_button" onClick={this.openModal}> + Add new customer</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles} >

                    <div className="Modal_style">
                        <button className="btn close_button" onClick={this.closeModal}>X</button>
                        <h2>Add new customer</h2>
                        <CustomerForm getCustomers={this.props.getCustomers} closeModal={this.closeModal} />
                    </div>
                </Modal>
            </div>
        )
    }
}

Modal.setAppElement('#root')
export default NewCustomer