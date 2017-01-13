var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var mailcheck = require('../services/emailcheck.js')
var promise = require('promise');
router.use(bodyparser.json());
router.post('/',function(req,res){
    console.log(req.body);
    let promiseArray = [];
    req.body.forEach((obj)=> promiseArray.push(mailcheck.email(obj)));
    Promise.all(promiseArray)
    .then((data) => res.json(data))
    .catch((err) => res.json({error: 'Something Went Wrong!'}));
})
module.exports = router;

