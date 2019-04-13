import React, { Component } from 'react';
import {addJobs, getAllJobs} from '../actions';
import {connect} from 'react-redux';

class HomePage extends Component {

	componentDidMount(){
	}

  render() {
    return (
      <div className="homepage">
   			<button>Post a job</button>
   			<button>Find a Job</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
 return {
 	
 }
}

export default connect(mapStateToProps)(HomePage);
