import React, { Component } from 'react'
import dateFns from "date-fns"
export class CalendarDay extends Component {
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
          <div className="icon" onClick={this.prevDay}>
            chevron_left
                </div>
        </div>
        <div className="col col-center">
          <span>
            {dateFns.format(this.state.currentMonth, "MMMM YYYY")}
          </span>
        </div>
        <div className="col col-end" onClick={this.nextDay}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    )
  }

  renderDay = () => {
    return (
      <div className="days">
        <div className="col col-center">
          {dateFns.format(this.state.currentMonth, "dddd")}
        </div>
      </div>
    )
  }

  renderCell = () => {
    let formattedDate = dateFns.format(this.state.selectedDate, "D")
    return (
      <div className="body col-center">
        <div className={`col cell selected`}
          onClick={() => this.onDateClick(dateFns.parse(this.state.selectedDate))}>
          <span className="number">{formattedDate}</span>
          <span className="bg">{formattedDate}</span>
        </div>
      </div>
    )
  }

  onDateClick = (day) => {
    this.setState({
      selectedDate: day
    })
  }

  nextDay = () => {
    let getMonth = dateFns.format(dateFns.addDays(this.state.selectedDate, 1), 'M')
    let getCurrentMonth = dateFns.format(this.state.currentMonth, 'M')

    if (getMonth > getCurrentMonth) {
        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        })
    }
    this.setState({
      selectedDate: dateFns.addDays(this.state.selectedDate, 1)
    })
  }

  prevDay = () => {
    let getMonth = dateFns.format(dateFns.subDays(this.state.selectedDate, 1), 'M')
    let getCurrentMonth = dateFns.format(this.state.currentMonth, 'M')
    if (getMonth < getCurrentMonth) {
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        })
    }
    this.setState({
      selectedDate: dateFns.subDays(this.state.selectedDate, 1)
    })
  }
  render() {
    return (
      <div>
        <div className="calendar">
          {this.renderHeader()}
          {this.renderDay()}
          {this.renderCell()}
        </div>
      </div>
    )
  }
}

export default CalendarDay
