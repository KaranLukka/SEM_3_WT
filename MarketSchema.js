const mongoose=require('mongoose');
const Schema=mongoose.Schema({
	Pid:Number,
	Pname:String,
	Pimage:String,
	Pprice:Number,
})
module.exports=mongoose.model('Market',Schema);