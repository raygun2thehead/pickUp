const mongoose = require("mongoose");
const db = require("../models/");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pickup02");

const activitySeed = [
  {
    activity: "Basketball",
    time: "3 pm",
    date: new Date(Date.now())
  },
  {
    activity: "Soccer",
    time: "3 pm",
    date: new Date(Date.now())
  },
  {
    activity: "",
    time: "3 pm",
    date: new Date(Date.now())
  }
];

db.Activity.remove({})
  .then(() => db.Activity.collection.insertMany(activitySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });