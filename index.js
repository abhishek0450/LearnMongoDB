const express = require('express')
const db = require('./db')
require('dotenv').config();



const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json());

//pizza shop backend
app.get('/', (req, res) => {
  res.send('Welcome to the Pizza Shop!')
})




//import routes
const personRoutes = require('./routes/PersonRoutes');
const MenuRoutes = require('./routes/MenuRoutes');
//use routes
app.use('/person', personRoutes);
app.use('/order', MenuRoutes);
    
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})