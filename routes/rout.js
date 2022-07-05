const express = require('express');
const rout = express.Router();


const fruits = [];

rout.get('/', (req, res,next) => {
    res.render('index',{
        list: fruits,
        title: 'Home',
        Message: 'hello world :)',
        layout: false,
    });
});

module.exports = rout;