const express = require('express');
const { Pool } = require('pg'); // For PostgreSQL, change as necessary for your DB

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection pool
const pool = new Pool({
    host: 'localhost', // Your database host
    user: 'your_user', // Your database user
    password: 'your_password', // Your database password
    database: 'your_database', // Your database name
    port: 5432, // Your database port
});

// Test database connection
pool.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

// Middleware
app.use(express.json()); // To parse JSON requests

// Example API routes
app.get('/api/example', (req, res) => {
    res.json({ message: 'Hello, this is an example API route!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});