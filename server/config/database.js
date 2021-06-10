var mysql = require('mysql');
var db = {
    host:'localhost',
    user:'root',
    password:'',
    database:'employees'
}

module.exports = function(){
    return {
        init: function(){
            return mysql.createConnection(db);
        },
        connect: function(conn){
            conn.connect(function(err){
                if(err) console.error('mysql connection error : '+err);
                else console.log('mysql is connected successful');
            })
        }
    }
};

