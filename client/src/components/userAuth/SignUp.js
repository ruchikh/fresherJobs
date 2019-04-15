import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createUser} from '../../actions'
import {Link} from "react-router-dom";

class SignUp extends Component {
	state = {
		username: "",
		email: "",
		password: ""
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubimit = (e) => {
		e.preventDefault();
		this.props.dispatch(createUser(this.state, (succeed) => {
			if(succeed){
				this.props.history.push('/login')
			}
		}))
	}

  render() {
  	console.log(this.props, "signup params data")
    return (
      <div className="signup">
      	<form onSubmit={this.handleSubimit}>
	        <input type="text" name="username" placeholder="Enter Name" onChange={this.handleChange} />
	        <input type="email" name="email" placeholder="Enter your Emaild" onChange={this.handleChange} />
	        <input type="password" name="password" placeholder="Enter Password" onChange={this.handleChange} />
	       	<input type="submit" value="Submit" onClick={this.handleSubimit}/>
	       	<Link to="/login" className="login-link">Already SignUp?</Link>
	      </form>
      </div>
    );
  }
}
export default connect()(SignUp);

