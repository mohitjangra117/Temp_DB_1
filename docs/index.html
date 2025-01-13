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

// Route to render the HTML page with form
app.get('/', (req, res) => {
  connection.query('SELECT * FROM user_data', (err, rows) => {
    if (err) {
      return res.status(500).send('Error fetching data from database.');
    }

    let tableRows = '';
    rows.forEach(row => {
      tableRows += `<tr>
                      <td>${row.name}</td>
                      <td>${row.email}</td>
                    </tr>`;
    });

    res.send(`
      <html>
        <head>
          <title>User Data Form</title>
          <style>
            table { width: 100%; border-collapse: collapse; }
            table, th, td { border: 1px solid black; }
            th, td { padding: 8px; text-align: left; }
          </style>
        </head>
        <body>
          <h1>User Data Form</h1>
          <form method="POST" action="/submit">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" required><br><br>
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" required><br><br>
            <button type="submit">Submit</button>
          </form>

          <h2>Submitted Data</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              ${tableRows}
            </tbody>
          </table>
        </body>
      </html>
    `);
  });
});

// Route to handle form submission
app.post('/submit', (req, res) => {
  const { name, email } = req.body;

  // Insert form data into the MySQL database
  connection.query(
    'INSERT INTO user_data (name, email) VALUES (?, ?)',
    [name, email],
    (err) => {
      if (err) {
        return res.status(500).send('Error saving data to database.');
      }

      // Redirect back to the home page to show the updated data
      res.redirect('/');
    }
  );
});

// Set up the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
