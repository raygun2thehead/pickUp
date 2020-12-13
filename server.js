const express = require("express");
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const cors = require('cors');

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());


// Serve up static assets (usually on heroku)
const uri = process.env.MONGODB_URI || "mongodb://localhost/pickup02";
   if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, 'client/build')));
        //
        app.get('*', (req, res) => {
          console.log('working')
          res.sendFile(path.join((__dirname = 'client/build/index.html')));
        });
      }

      // build mode
      app.get('*', (req, res) => {
        console.log('build mode')
        console.log(path.join(__dirname + '/client/public/index.html'))
        res.sendFile(path.join(__dirname + '/client/public/index.html'));
        
      });

      // app.post('/api/user', (req, res) => {
      //   console.log('THE ROUTE IS HIT');
      // });

      // Starting Server
      app.listen(PORT, () => {
        console.log(`App listening on PORT: ${PORT}`);
      });
     
