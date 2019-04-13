const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userShcema = new Schema({
	username: {type: String, require:true, unique:true},
	email:{type:String, require:true, unique:true},
	password: {type:String, require:true},
})


const User = mongoose.model("User", userShcema);

module.exports = User;


