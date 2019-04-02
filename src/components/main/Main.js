import React, { PureComponent } from 'react';
import './Main.css';
import Calendar from '../calendar/Calendar';

class Main extends PureComponent {
    render() {
        return (
            <div className="container main_container">
                <Calendar />
            </div>
        )
    }
}

export default Main;