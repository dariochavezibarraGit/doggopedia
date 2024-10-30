// general variables
const express = require('express');
const app = express();
const path = require('path')

// view engine setup
app.set('view engine', 'ejs'); // to render ejs files, it is necessary to define the rendering engine the app will use...
app.engine('ejs', require('ejs').__express);
app.set('views', path.join(__dirname, '/src/views/ejs')); // for the app to understand from where the views are going to be extracted from, we have to specify the location...

// router configuration
const dogRouter = require('./src/routes/dogRoutes'); // to use the routes created in 'dogRoutes.js', we have to import the whole file into a variable...
app.use(dogRouter); // in order to have paths working, we have to tell the app to use all the paths located in 'dogRouter.js

// server attributes
const port = 3000;
app.listen(port, () => {
    console.log(`Server Initialized. Listening Port ${ port }`)
})

// app configuration
app.use(express.static('src'));