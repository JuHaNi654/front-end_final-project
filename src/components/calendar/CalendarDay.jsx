import React, { Component } from 'react'
import dateFns from "date-fns"
import './CalendarDay.css'
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

  renderDailyTask = () => {
    let nowDayActivities = this.props.trainingList
    let day = dateFns.format(this.state.selectedDate, 'YYYY/MM/DD')
    day = day.split('/')
    nowDayActivities = nowDayActivities.filter(training => {
      let dateValue = training.date.split("/")
      return day[0] === dateValue[0] && day[1] === dateValue[1] && day[2] === dateValue[2]
    })
    const showListedTrainings = nowDayActivities.map((training, index) => {
      return (
        <div key={index}>
          <p>
            Activity: {training.activity} - Duration: {training.duration} <br />
            Customer: {training.customer.firstname} {training.customer.lastname}
          </p>
        </div>
      )
    })
    if (nowDayActivities.length === 0) {
      return (
        <div>
          No trainings booked for this day
        </div>
      )
    } else {
      return (
        <div className="activity_list">
          {showListedTrainings}
        </div>
      )
    }

  }
  render() {
    return (
      <div className="container">
        <div className="daily_box">
          <div className="day_calendar">
            {this.renderHeader()}
            {this.renderDay()}
            {this.renderCell()}
          </div>
        </div>
        <div className="daily_box">
          <h3>Daily Activities</h3>
          <div>
            {this.renderDailyTask()}
          </div>
        </div>
      </div>
    )
  }
}

export default CalendarDay
