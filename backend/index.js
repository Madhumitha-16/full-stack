const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const router = express.Router();

const connection = mysql.createConnection({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,      
    password: process.env.DB_PASSWORD,     
    database: process.env.DB_NAME
});
console.log(process.env.DB_HOST)
connection.connect(function (err) {
    if (err) {
        console.log("database connection failed", err);
    } else {
        console.log("database connection successful!!!!");
    }
});

router.get('/', function(req, res, next) {
    res.send('hi');
});

router.get('/buys', function(req, res, next) {
    let sql = `SELECT * FROM buyers`;
    connection.query(sql, function(err, result) {
        if (err) {
            return res.status(500).send("Database query failed");
        }
        res.json(result);
    });
});

app.use('/', router);

const PORT = process.env.PORT || 3307;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
