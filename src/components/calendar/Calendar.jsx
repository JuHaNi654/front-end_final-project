import React, { PureComponent } from 'react'

import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CalendarMonth from './CalendarMonth';
import CalendarWeek from './CalendarWeek';
import CalendarDay from './CalendarDay';

import { getTraining } from '../ServerCalls.js';
import moment from 'moment';

const styles = theme => ({
    button: {
        display: 'block',
        marginTop: theme.spacing.unit * 2,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});

/**
|--------------------------------------------------
| https://blog.flowandform.agency/create-a-custom-calendar-in-react-3df1bfd0b728
| calendar component original source is based from this tutorial
|--------------------------------------------------
*/

export class Calendar extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            selected: 1,
            open: false,
            trainingList: []
        }
    }


    componentDidMount() {
        getTraining()
            .then(response => {
                let data = response.data
                data.forEach(training => training.date = moment(training.date).format("YYYY/MM/DD"))
                this.setState({
                    trainingList: data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }



    handleChange = (event) => {
        this.setState({ selected: event.target.value });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    renderCalendar = () => {
        switch(this.state.selected) {
            case 1:
                return (<div><CalendarMonth trainingList={this.state.trainingList}/></div>)
            case 2:
                return (<div><CalendarWeek trainingList={this.state.trainingList}/></div>)
            case 3:
                return (<div><CalendarDay trainingList={this.state.trainingList} /></div>)
            default:
            
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div >
                <form autoComplete="off">
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="open-select">Date</InputLabel>
                        <Select
                            open={this.state.open}
                            onClose={this.handleClose}
                            onOpen={this.handleOpen}
                            value={this.state.selected}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'date',
                                id: 'open-select'
                            }}>
                            <MenuItem value={1}>Monthly</MenuItem>
                            <MenuItem value={2}>Weekly</MenuItem>
                            <MenuItem value={3}>Daily</MenuItem>
                        </Select>
                    </FormControl>
                </form>
                <div>
                    {this.renderCalendar()}
                </div>
            </div>
        )
    }
}




export default withStyles(styles)(Calendar)
