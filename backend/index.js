const express = require('express');
const mysql = require('mysql2');

const app = express();
const router = express.Router();

const connection = mysql.createConnection({
    host: "srv598.hstgr.io", 
    user: "u856398307_test",      
    password: "Madhu@db16",     
    database: "u856398307_test_fs"
});

connection.connect(function (err) {
    if (err) {
        console.log("database connection failed", err);
    } else {
        console.log("database connection successful!!!!");
    }
});

router.get('/', function(req, res, next) {
    res.send('index', { title: 'Express' });
});

router.get('/full-stack-virid.vercel.app/buys', function(req, res, next) {
    let sql = `SELECT * FROM buyers`;
    connection.query(sql, function(err, result) {
        if (err) {
            return res.status(500).send("Database query failed");
        }
        res.json(result);
    });
});

app.use('/', router);

app.listen(3307, () => {
    console.log("server running on port 3307");
});
