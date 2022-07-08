import  express  from 'express';
import path from 'path';
import expressHbs from 'express-handlebars';
import routers from './routes/rout.js';
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

app.listen(process.env.PORT || 5500); //for heroku
//app.listen(5500); not for heroku