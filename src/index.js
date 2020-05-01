const express= require('express');
const app= express();
const morgan = require('morgan');
const router= require('./routes/index')
const movies= require('./routes/movies')

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Routes
app.use(router);
app.use('/api/movies' , movies);

//Server
app.listen(app.get('port'),()=>{
    console.log(`server running on port ${app.get('port')}`)
})