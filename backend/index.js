const express = require('express');
const mysql = require('mysql2');
const multer = require('multer');
require('dotenv').config();
const cors = require('cors');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const app = express();
const router = express.Router();
app.use(cors()); // Enable CORS

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

app.get('/', function(req, res, next) {
    res.send('hi');
});

app.get('/buys', function(req, res, next) {
    let sql = `SELECT * FROM buyers`;
    connection.query(sql, function(err, result) {
        if (err) {
            return res.status(500).send("Database query failed");
        }
        res.json(result);
    });
});
app.post('/upload', upload.single('image'), (req, res) => {
    const image = req.file.buffer;
    console.log(image)
    const sql = 'INSERT INTO images (data) VALUES (?)';
    connection.query(sql, [image], (err, result) => {
        if (err) throw err;
        res.send('Image uploaded!');
    });
});

app.get('/image/:id', (req, res) => {
    const sql = 'SELECT data FROM images WHERE id = ?';
    connection.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.set('Content-Type', 'image/jpeg');;
            res.send(result[0].data);
        } else {
            res.status(404).send('Image not found');
        }
    });
});
app.use('/', router);

const PORT =  process.env.PORT || 3307;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
