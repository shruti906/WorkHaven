const express = require('express');
const router= express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/backroom',(req,res)=>{
    res.render('backroom');
})

router.get('/aboutus',(req,res)=>{
    res.render('aboutus');
})

router.get('/helpcenter',(req,res)=>{
    res.render('/helpcenter');
})
























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