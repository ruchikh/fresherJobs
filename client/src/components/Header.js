import React, { Component } from 'react';
import {addJobs, getAllJobs} from '../actions';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

class Header extends Component {

  render() {
    return (
      <div className="header">
        <Link to="/">
          <h1>FreshersJobs</h1>
        </Link>
        <Link to="Jobs">
          Jobs
        </Link>
      </div>
    );
  }
}

export default connect()(Header);
