const express = require('express');
const rout = express.Router();


rout.get('/', (req, res,next) => {
    res.render('index', {
        title: 'Home',
        Message: 'hello world :)',
        layout: false,
    });
});

module.exports = rout;