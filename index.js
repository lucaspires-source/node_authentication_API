const express = require('express');
const app = express();

//Import Router
const authoRoute = require('./routes/auth');


app.listen(3000,() => console.log('Server is running'));