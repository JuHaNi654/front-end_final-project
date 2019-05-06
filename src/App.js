import React, { PureComponent } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Main from './components/main/Main';
import Customer from './components/customer/Customer';
import Training from './components/training/Training';



/**
|--------------------------------------------------
| Router settings and auth
|--------------------------------------------------
*/
class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <div>
          <header className="App-header">
            <h1 className="header_text">Personal Trainer</h1>
          </header>
          <BrowserRouter>
            <div>
              <nav className="navbar navbar-expand-lg nav_style">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
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
      </div>
    );
  }
}

export default App;
