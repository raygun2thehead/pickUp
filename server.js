const express = require("express");
const logger = require("morgan");
const mongoose = require('mongoose');


const PORT =  process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/pickup',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });




// const express = require('express');
// const cors = require('cors');
// const passport = require('passport');
// const FacebookStrategy = require('passport-facebook').Strategy;
// const keys = require('./config');
// const chalk = require('chalk');
// let user = {};

// passport.serializeUser((user, cb) => {
//     cb(null, user);
// });
// passport.deserializeUser((user, cb) => {
//     cb(null, user);
// });

// passport.use(new FacebookStrategy({
//     clientID: keys.FACEBOOK.clientID,
//     clientSecret: keys.FACEBOOK.clientSecret,
//     callbackURL: "/auth/facebook/callback"
// },
//     (accessToken, refreshToken, profile, cb) => {
//         console.log(chalk.blue(JSON.stringify(profile)));
//         user = { ...profile };
//         return cb(null, profile);
//         // User.findOrCreate({facebookId: profile.id }, function(err, user) {
//         //     return cb(err, user);
//         // });
//         }
// ))

// const app = express();
// app.use(cors());
// app.use(passport.initialize());

// app.get('/auth/facebook', passport.authenticate("facebook"))
// app.get('/auth/facebook/callback', passport.authenticate("facebook"), (req, res) => {
//     res.redirect("/profile")
// });

// app.get('/user', (req, res) => {
//     console.log("getting user data");
//     res.send(user);
// });

// app.get("/auth/logout", (req, res) => {
//     console.log("logging out");
//     user = {};
//     res.redirect("/");
// })

// app.use(express.static("./public"));
// // app.use(
// //   session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
// // );
// // app.use(passport.initialize());
// // app.use(passport.session());

// const PORT = process.env.PORT || 3001;
// app.listen(PORT);