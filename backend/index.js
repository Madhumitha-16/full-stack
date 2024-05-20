const express = require('express');
const mysql = require('mysql2');
const multer = require('multer');
require('dotenv').config();
const cors = require('cors');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const bodyParser = require('body-parser');
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.post('/register', function (req, res) {
    let title=req.query.title;
    let content=req.query.content;
    let sql = `INSERT INTO users (title, content) VALUES (?,?)`;
   pool.query(sql,[title,content], function(err, result) {
      if (err) throw err;
      res.send("You got it Madhu!!!");
    });
  });

  
  app.post('/add-post', function (req, res) {
    const { title, description, type, price, home_type, bed_count, room_count, street, area, city, state, amenities } = req.body;
  
    const sql = `INSERT INTO ads (title, description, type_of_rent, price, type, bed_count, room_count, street, area, city, state, amenities) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
    const values = [title, description, type, price, home_type, bed_count, room_count, street, area, city, state, amenities.join(',')];
  console.log(values)
    pool.query(sql, values, function (err, result) {
      if (err) {
        console.error('Error inserting data into database:', err);
        res.status(500).send('Error inserting data into database');
        return;
      }
      res.send("You got it Madhu!!!");
    });
  });

  app.post('/signin', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  
    pool.query(query, [email, password], (error, results) => {
      if (error) {
        return res.status(500).json({ error: 'Database query error' });
      }
      if (results.length > 0) {
        
        res.status(200).json({ message: 'Sign-in successful', user: results[0] });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    });
  });
  app.post('/signup', (req, res) => {
    const { firstName, lastName, email, password, phoneNumber,type } = req.body;
  
    const query = 'INSERT INTO users (first_name, last_name, email, password, phone_no,role) VALUES (?, ?, ?, ?, ?,?)';
    
    pool.query(query, [firstName, lastName, email, password, phoneNumber, type], (error, results) => {
      if (error) {
        return res.status(500).json({ error: 'Database query error' });
      }
      res.status(201).json({ message: 'Sign-up successful', userId: results.insertId,role:type });
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
