const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const jobShcema = new Schema({
	title: {type: String, require:true},
	role:{type:String, require:true},
	description: {type:String, require:true},
	techStack: {type:String, require:true},
	experience: {type:String, require:true},
	location: {type:String, require:true},
	aboutCompany: {type:String, require:true}
})


const Job = mongoose.model("Job", jonSchema);

module.exports = Job;


