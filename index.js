const express = require("express");
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();
app.listen(3000, () => console.log('Server is running'));
//Connect to DB
mongoose.connect(
   process.env.DB_CONNECT, 
  {useNewUrlParser:true},
  ()=> console.log('connected to DB')
);

//Import Router
const authRoute = require('./routes/auth');

//Middleware
app.use(express.json())

//Route Middlewares
app.use('/api/user', authRoute);

