const express = require('express');
const rout = express.Router();

const array = 



rout.get('/', (req, res,next) => {
    res.render('index',{
        list: array,
        title: 'Home',
        Message: 'hello world :)',
        layout: false,
    });
});

module.exports = rout;