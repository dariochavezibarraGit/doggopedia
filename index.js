const express = require('express');
const app = express();

const dogRouter = require('./src/routes/dogRoutes');

app.use('/breeds', dogRouter);

const port = 3000

app.listen(port, () => {
    console.log(`Server Initialized. Listening Port ${ port }`)
})