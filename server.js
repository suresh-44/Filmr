const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const axios = require('axios');

const index = require('./router/router');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// bodyParser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use('/', index);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server up at port ${port}`);
});

// blooming-savannah-42100
