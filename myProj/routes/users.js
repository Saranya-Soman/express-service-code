var express = require('express');
var router = express.Router();
var userList = require('../Users.js').getUsers;

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  var [...names] = userList();
  res.json(names);
  //res.send(names);
});

module.exports = router;
