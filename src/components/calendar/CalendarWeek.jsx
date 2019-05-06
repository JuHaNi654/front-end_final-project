import React, { Component } from 'react'
import dateFns from "date-fns"
import './Calendar.css'
import CalendarPopUp from './CalendarPopUp';
export class CalendarWeek extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentMonth: new Date(),
            selectedDate: new Date(),
            currentWeek: new Date()
        }
    }
    /**
     |--------------------------------------------------
    | Calendar header function component, wich renders
    | calendar month and year
    |--------------------------------------------------
    */
    renderHeader = () => {
        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="icon" onClick={this.prevWeek}>
                        chevron_left
                    </div>
                </div>
                <div className="col col-center">
                    <span>
                        {dateFns.format(this.state.currentMonth, "MMMM YYYY")}
                    </span>
                </div>
                <div className="col col-end" onClick={this.nextWeek}>
                    <div className="icon">chevron_right</div>
                </div>
            </div>
        )
    }

    /**
    |--------------------------------------------------
    | Renders weekdays text
    |--------------------------------------------------
    */
    renderDays = () => {
        const days = []
        let startDate = dateFns.startOfWeek(this.state.currentMonth);

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), "dddd")}
                </div>
            )
        }

        return <div className="days row">{days}</div>
    }

    /**
    |--------------------------------------------------
    | Pop-up window shows current date activities
    |--------------------------------------------------
    */
    renderPopUpWindow = (date) => {
        let activities = this.props.trainingList
        let day = dateFns.format(date, 'YYYY/MM/DD')
        day = day.split('/')
        activities = activities.filter(training => {
            let dateValue = training.date.split("/")
            return day[0] === dateValue[0] && day[1] === dateValue[1] && day[2] === dateValue[2]
          })
        if (activities.length !== 0) {
            return (
                <span className="pb_button">
                    <CalendarPopUp activities={activities}/>
                </span>
            )
        }
    }

    /**
    |--------------------------------------------------
    | Renders current days the whole week
    |--------------------------------------------------
    */
    renderCells = () => {
        const weekStart = dateFns.startOfWeek(this.state.currentWeek, { weekStartsOn: 1 })
        const weekEnd = dateFns.endOfWeek(weekStart)
        const startDate = dateFns.startOfWeek(weekStart)
        const endDate = dateFns.endOfWeek(weekEnd)
        let day = startDate
        let days = []
        let formattedDate
        const rows = []
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = dateFns.format(day, "D")
                const cloneDay = day;
                days.push(
                    <div className={`col cell ${
                        dateFns.isSameDay(day, this.state.selectedDate) ? "selected" : ""}`}
                        key={day}
                        onClick={() => this.onDateClick(dateFns.parse(cloneDay))}>
                        <span className="number">{formattedDate}</span>
                        <span className="bg">{formattedDate}</span>
                        {this.renderPopUpWindow(cloneDay)}
                    </div>
                )
                day = dateFns.addDays(day, 1)
            }
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            )
            days = []
        }
        return <div className="body">{rows}</div>
    }

    onDateClick = (day) => {
        this.setState({
            selectedDate: day
        })
    }

    /**
    |--------------------------------------------------
    | Goes next week
    |--------------------------------------------------
    */
    nextWeek = () => {
        let getMonth = dateFns.format(dateFns.addWeeks(this.state.currentWeek, 1), 'M')
        let getCurrentMonth = dateFns.format(this.state.currentMonth, 'M')
        if (getMonth > getCurrentMonth) {
            this.setState({
                currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
            })
        }
        this.setState({
            currentWeek: dateFns.addWeeks(this.state.currentWeek, 1)
        })
    }
    /**
    |--------------------------------------------------
    | Goes previous week
    |--------------------------------------------------
    */
    prevWeek = () => {
        let getMonth = dateFns.format(dateFns.subWeeks(this.state.currentWeek, 1), 'M')
        let getCurrentMonth = dateFns.format(this.state.currentMonth, 'M')
        if (getMonth < getCurrentMonth) {
            this.setState({
                currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
            })
        }
        this.setState({
            currentWeek: dateFns.subWeeks(this.state.currentWeek, 1),

        })
    }
    render() {
        return (
            <div className="calendar">
                {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}
            </div>
        )
    }
}

export default CalendarWeek
