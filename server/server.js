const express = require('express');
const app = express();
const db = require('./config/database.js')();
const conn = db.init();
const PROT = process.env.PORT || 4001;

db.connect(conn);

app.get('/list',function(req,res){
    const sql = 'select * from current_dept_emp where emp_no = 10002';
    conn.query(sql,(err,rows)=>{
        if(err) {
            console.log('query is not excuted. select fail...\n' + err);
        }
        else {
            res.header("Access-Control-Allow-Origin", "*");
            res.send(rows);
        }
    });
})

app.listen(PROT, ()=> {
    console.log(`Server run : http://localhost:${PROT}/`)
})