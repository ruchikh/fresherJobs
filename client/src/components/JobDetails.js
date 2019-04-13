import React, { Component } from 'react';
import {addJobs, getAllJobs} from '../actions';
import {connect} from 'react-redux';

class JobDetails extends Component {
	constructor(props){
		super(props);
		this.state = {
			title: "",
			role: "",
			description: "",
			techStack: "",
			experience: "",
			location: "",
			aboutCompany: ""
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	componentDidMount(){
		this.props.dispatch(getAllJobs())
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.dispatch(addJobs(this.state, (succeed) => {
			if(succeed){
				this.props.dispatch(getAllJobs())
				this.props.history.push('/')
			}
		}))

	}

  render() {
  	const {allJobs} = this.props;
  	console.log(allJobs)
    return (
      <div className="jobs">
       	<form onSubmit={this.handleSubmit}>
       		<label for="title">Titile</label>
       		<input type="text" name="title" placeholder="Enter Titile" onChange={this.handleChange}/>
       		<label for="role">Role</label>
       		<input type="text" name="role" placeholder="Role" onChange={this.handleChange}/>
       		<label for="location">Location</label>
       		<input type="text" name="location" placeholder="location" onChange={this.handleChange}/>
       		<label for="techStack">Skills</label>
       		<input type="text" name="techStack" placeholder="Skills" onChange={this.handleChange}/>
       		<label for="experience">Experience</label>
       		<input type="text" name="experience" placeholder="Experience" onChange={this.handleChange}/>
       		<label for="descrption">Job Description</label>
       		<textarea name="description" placeholder="descrption" onChange={this.handleChange}/>
       		<label for="aboutCompany">About Company</label>
       		<textarea name ="aboutCompany" placeholder="about company" onChange={this.handleChange}/>
       		<input type="button" value="Submit" onClick={this.handleSubmit}/>
       	</form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		allJobs: state.allJobs
	}
}

export default connect(mapStateToProps)(JobDetails);
