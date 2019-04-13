const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const jobSeekerShcema = new Schema({
	name: {type: String, require:true, unique:true},
	location:{type:String, require:true},
	techStack: {type:String, require:true},
	experience: {type:String, require:true},
	projects: {type:String, require:true},
	resume: {type:String, require:true}
})


const JobSeeker = mongoose.model("JobSeeker", jobSeekerShcema);

module.exports = JobSeeker;



