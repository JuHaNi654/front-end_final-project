import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Main from './components/main/Main';
import Customer from './components/customer/Customer';
import Training from './components/training/Training';
import IconLink from './IconLink';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Personal Trainer</p>
        </header>
        <BrowserRouter>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" to="/">
                <IconLink />
              </Link>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/customers">Customers</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/training">Training</Link>
                </li>
              </ul>
            </nav>
            <Route exact path="/" component={Main} />
            <Route path="/customers" component={Customer} />
            <Route path="/training" component={Training} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
