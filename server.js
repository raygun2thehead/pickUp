const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const flash = require('connect-flash')
const mongoose = require("mongoose");
const session = require("express-session");
const MemoryStore = require('memorystore')(session);
const passport = require("passport");
const logger = require('morgan');
const routes = require("./routes");
// const cookieParser = require("cookie-parser");
const dotenv = require('dotenv')

dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));
app.use(flash());
app.use(express.static('public'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Connect to the Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/pickUp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => { 
    console.log('Error connecting to Mongoose -> ', error);
  });

mongoose.connection.once('open', () => {
  console.log('MongoDB Connected');
});

mongoose.connection.on('error', (err) => {
  console.log('Error staying connected to Mongoose -> ', err);
});

app.use(
  session({
    cookie: { maxAge: 86400000 },
    store: new MemoryStore({
      checkPeriod: 86400000, // prune expired entries every 24h
    }),
    resave: true,
    saveUninitialized: true,
    secret: 'keyboard cat',
  }),
);

// app.use(cookieParser())
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

// Start the API server
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`🌎  connected on port ${PORT} 🌍`.cyan);
});