const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const port = 3003;
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

// Handle POST request to register a new user
app.post('/register', (req, res) => {
  // Read existing data from JSON file
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'public/users.json'), 'utf-8'));

  // Add the new user data to the array
  data.push(req.body);

  // Write updated data to JSON file
  fs.writeFileSync(path.join(__dirname, 'public/users.json'), JSON.stringify(data));

  // Send response to client
  console.log('Registration successful');
  res.json({ message: 'Registration successful' });
});

// Handle POST request to create a new fund
app.post('/create', (req, res) => {
  // Read existing data from JSON file
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'public/data.json'), 'utf-8'));

  // Add the new fund data to the array
  data.push(req.body);

  // Write updated data to JSON file
  fs.writeFileSync(path.join(__dirname, 'public/data.json'), JSON.stringify(data));

  // Send response to client
  res.json({ message: 'Fund created successfully' });
});

// Handle GET request to fetch all funds
app.get('/create', (req, res) => {
  // Read existing data from JSON file
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'public/data.json'), 'utf-8'));

  // Send response to client with all the funds
  res.json(data);
});

app.listen(port, () => {
  console.log(`SERVER is on port number: ${port}`);
});
