import React, { Component } from 'react';
import './Main.css';
import Calendar from '../calendar/Calendar';

class Main extends Component {
    render() {
        return (
            <div className="container main_container">
                <Calendar />
            </div>
        )
    }
}

export default Main;