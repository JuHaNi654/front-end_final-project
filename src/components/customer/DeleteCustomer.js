import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class DeleteCustomer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            confirm: false
        }
    }

    alertConfirm = () => {
        this.setState(prevState => {
            return {confirm: !prevState.confirm}
        })
    }

    deleteCustomer = () => {
        this.alertConfirm()
    }
    render() {
        return(
            <div>
                <button onClick={this.alertConfirm}className="btn btn-danger">Delete selected customers</button>
                <Dialog
                    open={this.state.confirm}
                    onClose={this.alertConfirm}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">

                    <DialogTitle id="alert-dialog-title" >Warning</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            By confirming this alert you are deleting selected customers from database!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <button onClick={this.deleteCustomer}>
                            Confirm
                        </button>
                        <button onClick={this.alertConfirm}>
                            Cancel
                        </button>
                    </DialogActions>   
                </Dialog>
            </div>
        )
    }
}

export default DeleteCustomer