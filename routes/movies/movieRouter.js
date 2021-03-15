var express = require('express');
var router = express.Router();
var { createMovie } = require('./controller/movieController');

router.get('/', function(req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post("/create-movie", createMovie);

module.exports = router;