/*
 * GET home page.
 */

'use strict';

module.exports = function (app) {
    app.get('/', function (req, res) {
    	var fs = require("fs");
    	var file = __dirname + "/../public/res/aboutme";
    	var aboutmebuf = fs.readFileSync(file, "utf8");
    	var file = __dirname + "/../public/res/theproject";
    	var theprojectbuf = fs.readFileSync(file, "utf8");
    	var file = __dirname + "/../public/res/theday";
    	var thedaybuf = fs.readFileSync(file, "utf8");
    	
        res.render('carousel', {
            'aboutme' : aboutmebuf,
            'theproject' : theprojectbuf,
            'theday' : thedaybuf
        });
    });
};