var express = require('express')
var router = express.Router() 
var superagent = require('superagent')
var cheerio = require('cheerio')

router.get('/', function(req, res, next){  //router.get('/:url', function(req, res, next){
	var url = req.query.url

	if (url == null){
		res.json({
			confirmation: 'fail',
			message: 'please enter an url'
		})
	}

    superagent
    .get(url)
    .query(null)
    .set('Accept', 'text/html')   //.set('Accept', 'application/json')
    .end(function(err, response){
    if (err) {
    	res.json({
    		confirmation: 'fail',
    		message: err
    	})
    	return
    }


    var html = response.text

    res.send(html)     //send.json({
    })     //MAKE SURE "})" IS AT THE RIGHT LOCATION, OTHERWISE ReferenceError: response is not defined     

})

module.exports = router