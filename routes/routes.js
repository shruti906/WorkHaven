const express = require('express');
const router = express.Router();
const path = require('path');
const mongoose = require('mongoose');
const User = require('../models/User'); // Assuming User model is defined in models/User.js

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
    res.render('helpcenter');
})

router.get('/login',(req,res)=>{
    res.render('login');
})

router.get('/mainpage',(req,res)=>{
    res.render('mainpage');
})

router.get('/contactus',(req,res)=>{
    res.render('contactus');
})

// GET route for signup page
router.get('/signup', (req, res) => {
    res.render('signup');
});

// POST route to handle signup form submission
router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }
        
        const newUser = new User({ email, password });
        await newUser.save();
        res.redirect('/mainpage');
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

// POST route to handle login form submission
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password });
        if (user) {
            res.redirect('/mainpage');
        } else {
            res.status(401).send('Invalid email or password');
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;