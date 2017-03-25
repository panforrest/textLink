var mongoose = require('mongoose')

var BookmarkSchema = new mongoose.Schema({
	title:{type:String, trim:true, default:''},    //, trim:True, 
    profile:{type:String, trim:true, default:''},
    url:{type:String, trim:true, default:''}, 
    description:{type:String, trim:true, default:''},
    image:{type:String, trim:true, default:''}, 
    timestamp:{type:String, default:Date.now}  //  ...default:Date.now()}   
})

BookmarkSchema.methods.summary = function(){
    // var keys = ['profile', 'title', 'url', 'description', 'image', 'timestamp', '_id']
    // var summary = {}
    // var _this = this

    // keys.forEach(function(key, i){
    // 	summary[key] + _this[key]
    // })
    var summary = {
    	profile: this.profile,
    	title: this.title,
    	url: this.url,
    	description: this.description,
    	image: this.image,
    	timestamp: this.timestamp,
    	id: this._id.toString()
    }

	return summary
}

module.exports = mongoose.model('BookmarkSchema', BookmarkSchema)