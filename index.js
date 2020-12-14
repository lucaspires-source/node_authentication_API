const express = require("express");
const app = express();
const mongooose = require("mongoose");

//Connect to DB
mongooose.connect(
  "mongodb+srv://lucas_r_pires:<TOTO4frica>@cluster0.46fmg.mongodb.net/<dbname>?retryWrites=true&w=majority",
  {useNewUrlParser:true},
  ()=> console.log('connect to DB')
);

//Import Router
const authRoute = require('./routes/auth');

//Route Middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server is running'));
