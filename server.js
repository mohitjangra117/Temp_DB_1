const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();

// Set up body-parser middleware to handle POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password: '12345',
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Create a table if it doesn't exist (optional)
connection.query(
  `CREATE TABLE IF NOT EXISTS user_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
  )`,
  (err) => {
    if (err) console.error('Error creating table:', err);
  }
);

// Route to render the user data as JSON
app.get('/', (req, res) => {
  connection.query('SELECT * FROM user_data', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching data from database.' });
    }

    // Send the rows as JSON to the frontend
    res.json(rows);
  });
});

// Route to handle form submission and save data to the database
app.post('/submit', (req, res) => {
  const { name, email } = req.body;

  // Insert form data into the MySQL database
  connection.query(
    'INSERT INTO user_data (name, email) VALUES (?, ?)',
    [name, email],
    (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error saving data to database.' });
      }

      // Respond with a success message
      res.json({ message: 'Data submitted successfully' });
    }
  );
});

// Set up the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
