const mongoose = require('mongoose');
require('dotenv').config();
// Connection URL
//const useNewUrlLocal = process.env.MONGODB_URL_LOCAL;
const  useNewUrl = process.env.MONGODB_URL;
// Connect to the database
mongoose.connect(useNewUrl, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const db=mongoose.connection;

//get the default connection
//moongoose maintains a default connection object that represents the connection to the database
db.on('connected',()=>{
    console.log('Mongoose default connection Connected ');
});

db.on('error',(err)=>{
    console.log('Mongoose default connection error: ' + err);
});

db.on('disconnected',()=>{
    console.log('Mongoose default connection disconnected');
});

module.exports = db;

