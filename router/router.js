const express = require('express');
const axios = require('axios');
const circularJson = require('circular-json');

const key = require('../config/keys');

const route = express.Router();

route.get('/', (req, res) => {
  res.render('index');
});

route.post('/search', (req, res) => {
  var key = req.body.string;
  axios
    .get(
      'https://api.themoviedb.org/3/search/movie?api_key=a47db61ab073e30889bcb07000a6e52c&language=en-US&query=kgf&page=1&include_adult=false'
    )
    .then(result => {
      res.send(circularJson.stringify(result.data.results));
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = route;
