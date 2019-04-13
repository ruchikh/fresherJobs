import React, { Component } from 'react';

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

	handleSubmit = (e) => {

	}

  render() {
    return (
      <div className="jobs">
       	<from>
       		<label for="male">Titile</label>
       		<input type="text" name="title" placeholder="Enter Titile" onChange={this.handleChange}/>
       		<label for="male">Role</label>
       		<input type="text" name="role" placeholder="Role" onChange={this.handleChange}/>
       		<label for="male">Location</label>
       		<input type="text" name="location" placeholder="location" onChange={this.handleChange}/>
       		<label for="male">Skills</label>
       		<input type="text" name="techStack" placeholder="Skills" onChange={this.handleChange}/>
       		<label for="male">Experience</label>
       		<input type="text" name="experience" placeholder="Experience" onChange={this.handleChange}/>
       		<label for="male">Job Description</label>
       		<textarea name="description" placeholder="descrption" onChange={this.handleChange}/>
       		<label for="male">About Company</label>
       		<textarea name ="aboutCompany" placeholder="about company" onChange={this.handleChange}/>
       	</from>
      </div>
    );
  }
}

export default JobDetails;
