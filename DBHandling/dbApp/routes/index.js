var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/storeData', function(req, res){
  //console.log(req.body.name);
  //console.log(req.body.age);
  res.send(`Names added to list,name:${req.body.name}, age:${req.body.age}`);
});

module.exports = router;
