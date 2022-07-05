const express = require('express');
const rout = express.Router();


const fruits = [
    {
    name: 'Apple',
    price: '$1.00',
    description: 'The apple is the most common fruit in the world. It is also the most widely consumed fruit.',
    },
    {
    name: 'Orange',
    price: '$0.50',
    description: 'The orange is a citrus fruit that is also called an orange, an orange tree, or a sweet orange.',
    },
    {
    name: 'Banana',
    price: '$0.75',
    description: 'The banana is a tropical plant that belongs to the genus Musa. It is also called banana plant.',
    },
    {
    name: 'Mango',
    price: '$1.00',
    description: 'The mango is a tropical plant that belongs to the genus Mangifera. It is also called Mangifera indica.',
    }

];

rout.get('/', (req, res,next) => {
    res.render('index',{
        list: fruits,
        title: 'Home',
        Message: 'hello world :)',
        layout: false,
    });
});

module.exports = rout;