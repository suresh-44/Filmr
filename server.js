const express = require('express');
const ejs = require('ejs');
const axios = require('axios');
// const {parse, stringify} = require('flatted/cjs');

const index = require('./router/index');

var app = express();

// ejs middleware
// app.engine('ejs', ejs);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use('/', index);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server up at port ${port}`);
});

// a47db61ab073e30889bcb07000a6e52c
