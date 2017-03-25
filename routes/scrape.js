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
		return
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
    var props = ['og:title', 'og:description', 'og:image']
    var metaData = {}

    $ = cheerio.load(html)   //$ = cheerio(html)

    $('meta').each(function(i, meta){      //function(key, i)
    	if (meta.attribs != null){           //if (meta.attribs != -1){
    		var attribs = meta.attribs          //var prop = meta.attribs
    		if (attribs.property != null) {             //if (prop.keys !=-1) {
    			var prop = attribs.property        //var keys = props.keys
    			if (props.indexOf(prop) != -1) {                 //if (keys > 0) {
    				var key = prop.replace('og:', '')          //props.replace('og:', '')
    				metaData[key] = attribs.content            //key = meta.content
    			} 
    		}
    	}
    })   //IF IN WRONG LINE, WILL CAUSE: Error: Can't set headers after they are sent.
    	metaData['url'] = url
    	res.json({
    		confirmation: 'success',
    		tags: metaData     //metaData: metaData
    	})
    // })  



    // res.send(html)     //send.json({
    })     //MAKE SURE "})" IS AT THE RIGHT LOCATION, OTHERWISE ReferenceError: response is not defined     

})

module.exports = router