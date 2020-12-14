const express = require("express");
const app = express();
const mongooose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

//Connect to DB
mongooose.connect(
   process.env.DB_CONNECT, 
  {useNewUrlParser:true},
  ()=> console.log('connect to DB')
);

//Import Router
const authRoute = require('./routes/auth');

//Route Middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server is running'));
