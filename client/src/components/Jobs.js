import React, { Component } from 'react';
import {getAllJobs, isLoggedIn} from '../actions';
import {connect} from 'react-redux';

class Jobs extends Component {

	componentDidMount(){
		this.props.dispatch(getAllJobs());
    this.props.dispatch(isLoggedIn())
	}

  render() {
  	const {allJobs} = this.props;
  	console.log(allJobs)
    return (
      <div className="homepage">
      	{
      		allJobs && allJobs.map( job => 
      				<h2>{job.title}</h2>
              )
      	}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		allJobs: state.allJobs,
    currentUser: state.currentUser
	}
}

export default connect(mapStateToProps)(Jobs);
