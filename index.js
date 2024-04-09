const express = require('express')
const db = require('./db')
require('dotenv').config();
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;//strategy for authenticating with a username and password



const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json());

//middleware
const logRequest = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
  next(); // Move on to the next phase
}
app.use(logRequest);

// const localAuthMiddleware = passport.authenticate('local', {session: false});

//pizza shop backend
app.get('/',(req, res) => {
  res.send('Welcome to the Pizza Shop!')
})



// passport.use(new LocalStrategy(async (username, password, done) => {
//     try {
//         // console.log('Received credentials:', username, password);
//         const user = await Person.findOne({ username });
//         if (!user)
//             return done(null, false, { message: 'Incorrect username.' });
        
//         const isPasswordMatch = await user.comparePassword(password);
//         if (isPasswordMatch)
//             return done(null, user);
//         else
//             return done(null, false, { message: 'Incorrect password.' })
//     } catch (error) {
//         return done(error);
//     }
// }));

// app.use(passport.initialize());




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