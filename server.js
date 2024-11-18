const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static JSON data
app.get('/api/data', (req, res) => {
    // Send the static JSON file as a response
    res.sendFile(path.join(__dirname, 'data.json'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to the Static JSON API!');
});
