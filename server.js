const express = require('express');
const cors = require('cors');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./config/index');
const chalk = require('chalk');
const mongoose = require("mongoose");
const session = require("express-session");
const PORT = process.env.NODE_ENV || 3001;

let user = {};

passport.serializeUser((user, cb) => {
    cb(null, user);
});
passport.deserializeUser((user, cb) => {
    cb(null, user);
});

passport.use(new FacebookStrategy({
  clientID: keys.FACEBOOK.clientID,
  clientSecret: keys.FACEBOOK.clientSecret,
  callbackURL: "/auth/facebook/callback"
},
(accessToken, refreshToken, profile, cb) => {
  console.log(chalk.blue(JSON.stringify(profile)));
  user = { ...profile };
  return cb(null, profile);
}));
// User.findOrCreate({facebookId: profile.id }, function(err, user) {
        //     return cb(err, user);
        // });


const app = express();
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

// app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));

app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
  );


 app.get("/auth/facebook", passport.authenticate("facebook"));
app.get("/auth/facebook/callback",
    passport.authenticate("facebook"),
    (req, res) => {
        res.redirect("/profile");
    });

// app.get('/user', (req, res) => {
//     console.log("getting user data");
//     res.send(user);
// });

app.get("/auth/logout", (req, res) => {
    console.log("logging out");
    user = {};
    res.redirect("/");
})



mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/pickup',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });