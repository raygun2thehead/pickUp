const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
 

const passport = require('./passport');



const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT || 3001;
 
// Route requires
const user = require('./routes/user');

    app.use(
        session({
          secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
         
          resave: false, //required
          saveUninitialized: false, //required
        })
      );

      // Passport
      app.use(passport.initialize());
      app.use(passport.session()); // calls the deserializeUser

// MIDDLEWARE
 app.use(express.urlencoded({extended:true}))
 app.use(express.json())
app.use(cors());


 
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/pickup02")

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './client/build')));
  //
  app.get('*', (req, res) => {
    console.log('working')
    res.sendFile(path.join((__dirname = './client/build/index.html')));
  });
}

 

// app.post('/api/user', (req, res) => {
//   console.log('THE ROUTE IS HIT');
// });

// Starting Server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});


 