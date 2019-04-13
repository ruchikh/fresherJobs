import React, { Component } from 'react';
import {addJobs, getAllJobs} from '../actions';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

class Login extends Component {
	state = {
		username: "",
		password: ""
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubimit = (e) => {
		e.preventDefault();
	}

  render() {
    return (
      <div className="login">
      	<form>
	        <input type="text" name="username" placeholder="Enter Name" onChange={this.handleChange} />
	        <input type="password" name="password" placeholder="Enter Password" onChange={this.handleChange} />
	      </form>
      </div>
    );
  }
}
export default connect()(Login);

