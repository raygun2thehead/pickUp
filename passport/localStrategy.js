const User = require("../models/user");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

const strategy = new LocalStrategy( // Our user will sign in using an username, rather than a "username"
  {
    usernameField: "username",
  },
  (username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) throw err;
      if (!user) return done(null, false);
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) throw err;
        if (result === true) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    });
  }
);

module.exports = strategy;