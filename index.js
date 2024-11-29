const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the project directory
app.use(express.static(__dirname));

// Default route to serve home.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});


// POST route to handle login form submission
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const loginData = { email, password };

    const filePath = path.join(__dirname, 'login.json');

    // Read existing data
    fs.readFile(filePath, 'utf8', (err, data) => {
        let json = [];
        if (!err && data) {
            json = JSON.parse(data);
        }
        json.push(loginData);
        fs.writeFile(filePath, JSON.stringify(json, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error saving data');
            }
            res.redirect('home.html');
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
