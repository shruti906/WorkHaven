const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;
const routes = require('./routes/routes')

app.use('/',routes)
app.use(express.static('./assets'));
app.use(express.static('./scripts'));
// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the project directory
app.use(express.static(__dirname));

// Default route to serve home.html


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
