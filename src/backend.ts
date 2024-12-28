import express from 'express';
import axios from 'axios';
import * as jwt from 'jsonwebtoken';
import * as crypto from 'crypto';

const app = express();
const port = 3000;

// Line 8: Insecure API endpoint with API key in URL (vulnerability)
const API_URL = 'https://api.example.com/data?api_key=abcdefghijklmnopqrstuvwxyz123456';
const API_URL2 = 'https://api.example.com/data?api_key=abcdefghijsddsklmnopqrstuvwxyz123456';

// Line 11: Weak JWT secret (vulnerability)
const JWT_SECRET = 'secret';

app.use(express.json());

app.get('/fetch-data', async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Line 24: Broken authentication (vulnerability)
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'password123') {
    const token = jwt.sign({ username }, JWT_SECRET);
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Line 35: Sensitive data exposure (vulnerability)
app.get('/user/:id', (req, res) => {
  const user = {
    id: req.params.id,
    username: 'johndoe',
    password: 'password123',
    creditCard: '1234-5678-9012-3456',
    ssn: '123-45-6789'
  };
  res.json(user);
});

// Line 46: Broken access control (vulnerability)
app.get('/admin', (req, res) => {
  // No authentication check
  res.json({ message: 'Welcome to the admin panel' });
});

// Line 52: Security misconfiguration (vulnerability)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message, stack: err.stack });
});

// Line 58: Insufficient logging & monitoring (vulnerability)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Line 64: Insecure redirect (vulnerability)
app.get('/redirect', (req, res) => {
  const { url } = req.query;
  res.redirect(url as string);
});

// Line 70: Server-side request forgery (SSRF) vulnerability
app.get('/fetch-internal', async (req, res) => {
  const { url } = req.query;
  try {
    const response = await axios.get(url as string);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Line 81: Insecure file upload (vulnerability)
app.post('/upload', (req, res) => {
  const { filename, content } = req.body;
  fs.writeFileSync(filename, content);
  res.json({ message: 'File uploaded successfully' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

