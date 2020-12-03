const mongodb = require('mongodb');
const mongoose =require('mongoose');
const express = require('express');
const morgan = require('morgan');


const port = 8080
const app = express();

app.get('/', (req, res) => {
  res.send('Testing')
})

app.listen(port, () => {
  console.log('Listening at http://localhost:${port}')
})

