const express = require('express');
const router= express.Router();
const path = require('path');
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/home.html'));
});








// POST route to handle login form submission
router.post('/login', (req, res) => {
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
            res.redirect('../views/home.html');
        });
    });
});

module.exports = router;