import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { deleteCustomer } from '../ServerCalls.js'

class DeleteCustomer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            confirm: false
        }
    }

    alertConfirm = () => {
        this.setState(prevState => {
            return { confirm: !prevState.confirm }
        })
    }

    deleteCustomer = () => {
        deleteCustomer(this.props.deleteCustomerLink)
            .then(response => {
                this.props.getCustomers()
                this.alertConfirm()
            })
            .catch(err => {
                console.log(err)
            })

    }
    render() {
        return (
            <div>
                <button onClick={this.alertConfirm} className="btn deleteBtn_style">Delete</button>
                <Dialog
                    open={this.state.confirm}
                    onClose={this.alertConfirm}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title" ><span className="dialog_style">Warning</span></DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <span className="dialog_style">
                                By confirming this alert you are deleting selected customer from database!
                            </span>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <button className="btn button_confirm" onClick={this.deleteCustomer}>
                            Confirm
                        </button>
                        <button className="btn button_cancel" onClick={this.alertConfirm}>
                            Cancel
                        </button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default DeleteCustomer