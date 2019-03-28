import React, { Component } from 'react'
import dateFns from "date-fns"

export class CalendarMonth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentMonth: new Date(),
            selectedDate: new Date()
        }
    }

    renderHeader = () => {
        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="icon" onClick={this.prevMonth}>
                        chevron_left
                    </div>
                </div>
                <div className="col col-center">
                    <span>
                    {dateFns.format(this.state.currentMonth, "MMMM YYYY")}
                    </span>
                </div>
                <div className="col col-end" onClick={this.nextMonth}>
                    <div className="icon">chevron_right</div>
                </div>
            </div>
        )
    }

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

    renderCells = () => {
        const monthStart = dateFns.startOfMonth(this.state.currentMonth)
        const monthEnd = dateFns.endOfMonth(monthStart)
        const startDate = dateFns.startOfWeek(monthStart)
        const endDate = dateFns.endOfWeek(monthEnd)
        let day = startDate
        let days = []
        let formattedDate
        const rows = []

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = dateFns.format(day, "D")
                const cloneDay = day;
                days.push(
                    <div className={`col cell ${!dateFns.isSameMonth(day, monthStart) ?
                        "disabled" :
                        dateFns.isSameDay(day, this.state.selectedDate) ? "selected" : ""}`}
                        key={day}
                        onClick={() => this.onDateClick(dateFns.parse(cloneDay))}>
                        <span className="number">{formattedDate}</span>
                        <span className="bg">{formattedDate}</span>
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

    nextMonth = () => {
        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        })
    }

    prevMonth = () => {
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
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

export default CalendarMonth
