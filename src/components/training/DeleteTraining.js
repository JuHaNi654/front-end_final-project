import React, { Component } from 'react'
import { deleteTraining } from '../ServerCalls'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export class DeleteTraining extends Component {
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

    deleteTraining = () => {
        deleteTraining(this.props.trainingId)
            .then(response => {
                this.alertConfirm()
                this.props.getTraining()
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
                                By confirming this alert you are deleting selected training activity from database!
                            </span>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <button className="btn button_confirm" onClick={this.deleteTraining}>
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

export default DeleteTraining
