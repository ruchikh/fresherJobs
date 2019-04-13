import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import JobDetails from './components/JobDetails'
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={JobDetails} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
