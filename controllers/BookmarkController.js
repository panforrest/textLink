var Bookmark = require('../models/Bookmark')
var Promise = require('bluebird')

module.exports = {
    get: function(params){     //find:
    	return new Promise(function(resolve, reject){
    		Bookmark.find(params, null, function(err, bookmarks){
    			if (err){
    				reject(err)
    				return     //FOR GOT ONE THOUSAND AND ONE TIMES
    			}

    			var list = []
    			bookmarks.forEach(function(bookmark, i){
    				list.push(bookmark.summary())
    			})
    			resolve(list)
    		})

    	})
    },

    getById: function(id){
    	return new Promise(function(resolve, reject){
    		Bookmark.findById(id, function(err, bookmark){
    			if (err){
    				reject(new Error('Bookmark Not Found'))
    				return
    			}

    			if (bookmark == null){
    				reject(new Error('Bookmark Not Found'))
    				return
    			}
    			resolve(bookmark.summary())    //resolve(bookmark.summary())
    		})
    	})
    },

    create: function(params){
    	return new Promise(function(resolve, reject){
    		Bookmark.create(params, function(err, bookmark){
    			if (err){
    				reject(err)
    				return
    			}
    			resolve(bookmark.summary())
    		})
    	})
    }
}
