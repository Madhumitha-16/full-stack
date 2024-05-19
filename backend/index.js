const express = require('express');
const mysql = require('mysql2');
const multer = require('multer');
require('dotenv').config();
const cors = require('cors');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const app = express();
app.use(cors()); // Enable CORS

// Create a connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

console.log(process.env.DB_HOST);

app.get('/', function (req, res, next) {
    res.send('hi');
});

app.get('/buys', function (req, res, next) {
    let sql = `SELECT * FROM buyers`;
    pool.query(sql, function (err, result) {
        if (err) {
            return res.status(500).send("Database query failed");
        }
        res.json(result);
    });
});

app.post('/upload', upload.single('image'), (req, res) => {
    const image = req.file.buffer;
    console.log(image);
    const sql = 'INSERT INTO images (data) VALUES (?)';
    pool.query(sql, [image], (err, result) => {
        if (err) throw err;
        res.send('Image uploaded!');
    });
});

app.get('/image/:id', (req, res) => {
    const sql = 'SELECT data FROM images WHERE id = ?';
    pool.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.set('Content-Type', 'image/jpeg');
            res.send(result[0].data);
        } else {
            res.status(404).send('Image not found');
        }
    });
});

const PORT = process.env.PORT || 3307;
app.listen(3307, () => {
    console.log(`Server running on port ${PORT}`);
});
console.log(process.env.PORT);
