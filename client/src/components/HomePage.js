import React, { Component } from 'react';
import {addJobs, getAllJobs, isLoggedIn} from '../actions';
import {connect} from 'react-redux';
import {Link, Redirect} from "react-router-dom";

class HomePage extends Component {

  constructor(props) {
    super(props)

    this.checkForLogin = this.checkForLogin.bind(this)
  }

	componentDidMount(){
    this.props.dispatch(isLoggedIn())
	}

  checkForLogin() {
    console.log(this.props)
    if (this.props.currentUser) {
      this.props.history.push('newjobs', { comingFrom: 'post' })
    } else {
      this.props.history.push('login', {comingFrom: "post"})
    }
  }

  render() {
    const {currentUser} = this.props
    return (
      <div className="homepage">
      {
        <div>
   			<button onClick={this.checkForLogin}>Post a job</button>
   			<button>Find a Job</button>
        </div> 
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
 return {
 	currentUser: state.crrentUser
 }
}

export default connect(mapStateToProps)(HomePage);
