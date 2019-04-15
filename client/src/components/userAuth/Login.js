import React, { Component } from 'react';
import {connect} from 'react-redux';
import {logInAction} from '../../actions'
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
		this.props.dispatch(logInAction(this.state, (succeed) => {
			if(succeed){
				this.props.history.push('/jobs')
			}
		}))
	}

  render() {
    return (
      <div className="login">
      	<form onSubmit={this.handleSubimit}>
	        <input type="text" name="username" placeholder="Enter Name" onChange={this.handleChange} />
	        <input type="password" name="password" placeholder="Enter Password" onChange={this.handleChange} />
	       	<input type="button" value="Login" onClick={this.handleSubimit} />
	       	<Link to="/signup" className="signup-link">Get Started?</Link>

	      </form>
      </div>
    );
  }
}
export default connect()(Login);

