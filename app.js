import  express  from 'express';
import path from 'path';
import expressHbs from 'express-handlebars';
import routers from './routes/rout.js';
//import periodicTable from './helpers/hbs/periodicTableLogical.js';
//const express = require('express');
//const path = require('path');
//const expressHbs = require('express-handlebars');
//const routers = require('./routes/rout');
//const periodicTable = require('./helpers/hbs/periodicTableLogical');
import lookingForCharacter from './helpers/hbs/periodicTableLogical.js';

const app = express();

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', expressHbs({
    helpers:{
        lookingForCharacter: lookingForCharacter,
    } 
}));
app.set('view engine','hbs');
app.set('views','views');

app.use(routers);

app.use('/', (req,res,next)=>{
    res.status(404).render('404', {
        title: '404',
        errorMessage: 'Page not found',
        layout: false,
    });
})


app.listen(5500);