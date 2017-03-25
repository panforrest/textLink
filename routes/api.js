var express = require('express');
var router = express.Router();
var controllers = require('../controllers')
// var mongoose = require('mongoose')   //DON'T NEED THIS LINE ACTUALLY

/* GET users listing. */
router.get('/:resource', function(req, res, next) {
    var resource = req.params.resource
    var controller = controllers[resource]

    if (controller == null) {
    	res.json({
    		confirmation: 'fail',
    		message: 'invalid resource'
    	})
    	return
    }

    controller.get(req.query)   //THIS SMALL STUPIDITY KILLS THE WHOLE THING 	controller.get
    .then(function(results){
    	res.json({
    		confirmation: 'success',
    		results: results    //THIS OTHER SMALL STUPIDITY KILLS THE WHOLE THING results: bookmarks
    	})
    })
    .catch(function(err){
    	res.json({
    		confirmation: 'fail',
    		message: err
    	})
    })
})

router.get('/:resouce/:id', function(req, res, next){
	var resource = req.params.resouce
	var id = req.params.id
    var controller = controllers[resource]

    if (controller == null){
    	res.json({
    		confirmation: 'fail',
    		message: 'invalid resource'
    	})
    	return
    }

    controller.getById(id)
    .then(function(result){
    	res.json({
    		confirmation: 'success',
            result: result
    	})
    })
    .catch(function(err){
        res.json({
        	confirmation: 'fail',
        	message: err.message
        })
    })
})

router.post('/:resource', function(req, res, next){  //('/:resoure', 
	var resource = req.params.resource
	// var id = req.params.id
    var controller = controllers[resource]

    if (controller == null){
    	res.json({
    		confirmation: 'fail',
    		message: 'invalid resource'
    	})
    	return
    }

    controller.create(req.body)    //NEED TO REMEMBER THIS MISTAKE: controller.create(params) 
    .then(function(result){
    	res.json({
    		confirmation: 'success',
            result: result
    	})
    })
    .catch(function(err){
        res.json({
        	confirmation: 'fail',
        	message: err
        })
    })
})

//})    I CANNOT THIS IS MY MOST STUPID MISTAKE TO KILL THE WHOLE THING

module.exports = router;