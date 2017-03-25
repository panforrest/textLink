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
    			resolve(bookmarks)
    		})

    	})
    },

    getById: function(id){
    	return new Promise(function(resolve, reject){
    		Bookmark.findById(id, null, function(err, bookmark){
    			if (err){
    				reject(new Error('Bookmark Not Found'))
    				return
    			}

    			if (bookmark == null){
    				reject(new Error('Bookmark Not Found'))
    				return
    			}
    			resolve(bookmark)
    		})
    	})
    },

    create: function(params){
    	return new Promise(function(resolve, reject){
    		Bookmark.create(params, null, function(err, bookmark){
    			if (err){
    				reject(err)
    				return
    			}
    			resolve(bookmark)
    		})
    	})
    }
}
