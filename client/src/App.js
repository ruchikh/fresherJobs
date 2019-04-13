import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import JobDetails from './components/JobDetails';
import HomePage from './components/HomePage';
import Jobs from './components/Jobs';
import Header from './components/Header';
import SignUp from './components/userAuth/SignUp';
import Login from './components/userAuth/Login'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/jobs" component={Jobs} />
            <Route path="/newjobs" component={JobDetails} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
