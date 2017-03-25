var mongoose = require('mongoose')

var BookmarkSchema = new mongoose.Schema({
	titel:{type:String, trim:true, default:''},    //, trim:True, 
    profile:{type:String, trim:true, default:''},
    url:{type:String, trim:true, default:''}, 
    timestamp:{type:String, default:Date.now}  //  ...default:Date.now()}   
})

module.exports = mongoose.model('BookmarkSchema', BookmarkSchema)