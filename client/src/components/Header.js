import React, { Component } from 'react';
import {addJobs, getAllJobs, isLoggedIn} from '../actions';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

class Header extends Component {

  componentDidMount(){
    this.props.dispatch(isLoggedIn())
  }

  render() {
    const {currentUser} = this.props;
    return (
      <div className="header">
        <Link to="/">
          <h1>FreshersJobs</h1>
        </Link>
        <div>
        {
          currentUser && 
          <div>
          <Link to="Jobs">
            Jobs
          </Link>
          <Link to="newjobs"> Post a job</Link>
          <Link to="Profile">{currentUser.username[0]}</Link>
          </div>
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  currentUser: state.currentUser
}

export default connect(mapStateToProps)(Header);
