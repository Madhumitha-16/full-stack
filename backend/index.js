const express= require('express');
const app=express();
const router = express.Router();
const mysql = require('mysql2');

app.use('/',(req,res)=>{
    res.send("from server")
})
const connection = mysql.createConnection({
    host: process.env.MYSQL_URL, 
    user: process.env.MYSQL_USERNAME,      
    password: process.env.MYSQL_PASSWORD,     
    database: process.env.MYSQL_DATABASE
  }); 

  connection.connect(function (err) {
    if (err) console.log("database connection failed",err);
    else console.log("database connection successfull!!!!");
});

router.get('/full-stack-virid.vercel.app/buyers', function(req, res, next) {
  let sql = `select * from buyers `;
  connection.query(sql,function(err, result) {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(3000,console.log("server running on port 3000"))