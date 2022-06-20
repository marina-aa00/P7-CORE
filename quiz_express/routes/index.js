var express = require('express');
var router = express.Router();

const quizController = require('../controllers/quiz'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index'/*, { title: 'Express' }*/);
});
/* GET página créditos*/
router.get('/credits', function(req, res, next) {
  res.render('credits');
});
/* GET página quizzes*/
router.get('/quizzes', quizController.index );


module.exports = router;
