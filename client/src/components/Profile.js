import React, { Component } from 'react';
import {isLoggedIn} from '../actions';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

class Profile extends Component {

  componentDidMount(){
    this.props.dispatch(isLoggedIn())
  }

  render() {
    return (
      <div className="header">
        <Link to="/">
          <h1>FreshersJobs</h1>
        </Link>
        <Link to="Jobs">
          Jobs
        </Link>
        <Link to="newjobs"> Post a job</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  currenntUser: state.currenntUser
}

export default connect(mapStateToProps)(Profile);
