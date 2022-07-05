const express = require('express');
const path = require('path');
const expressHbs = require('express-handlebars');
const routers = require('./routes/rout');
const periodicTable = require('./helpers/hbs/periodicTableLogical');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', expressHbs({
    helpers:{
        periodicTable: periodicTable.separators
    } 
}));
app.set('view engine','hbs');
const viewPath = path.join(__dirname, 'views');
app.set('views',viewPath);

app.use(routers);

app.use('/', (req,res,next)=>{
    res.status(404).render('404', {
        title: '404',
        errorMessage: 'Page not found',
        layout: false,
    });
})


app.listen(5500);