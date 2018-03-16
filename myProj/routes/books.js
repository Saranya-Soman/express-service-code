var express = require('express');
var router = express.Router();
router.use('/', (req, res, next)=>{
    console.log('My first USE middleware');
    //res.send('Testing NExt');
    console.log('Host:'+req.host)
    next();
})

router.get('/', function(req, res){
   // res.send("Books js is accessed");
    res.render('bookList',{'book':'Master'});
})

module.exports = router;