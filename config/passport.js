  
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models');

passport.use(
  new LocalStrategy((username, password, done) => {
    db.User.findOne(
      {
        username: username,
      },
      (err, user) => {
        if (err) {
          console.log('something went wrong\n', err);
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: 'No user found' });
        }
        if (!user.validPassword(password, user.password)) {
          return done(null, false, { message: 'incorrect password' });
        } else {
          return done(null, user);
        }
      },
    );
  }),
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.User.findById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = passport;