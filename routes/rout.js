const express = require('express');
const rout = express.Router();
const json = require('../periodicTable.json');

const data = json;
const dataArray = data.map(e => Object.entries(e));

rout.get('/', (req, res,next) => {
    res.render('index',{
        list: data,
        separator: false,
        title: 'Home',
        Message: 'hello world :)',
        layout: false,
    });
});

module.exports = rout;