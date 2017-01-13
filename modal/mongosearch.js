var assert = require('assert');

exports.searchfun = function(db,obj,callback){
    console.log('Enter In Function');
    var con = db.collection('email_table');
    console.log('Go for Find');
    con.find(obj).toArray(function(err,result){
        assert.equal(err,null);
        console.log('Result Is Moving');
        callback(result);
    });
}
