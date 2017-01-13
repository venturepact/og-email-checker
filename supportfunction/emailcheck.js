var emailcheck = require('email-existence');

exports.email = function(obj){
    return new Promise((resolve, reject) =>{
        emailcheck.check(obj.email,(err,res) => {
            if(err) reject(err);
            else{
                if(res) obj.valid = "TRUE";
                else obj.valid = "FALSE";
                resolve(obj);
            }
        });
    });
}
