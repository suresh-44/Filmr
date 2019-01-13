const express = require('express');
const axios = require('axios');
const circularJson = require('circular-json');

const key = require('../config/keys');

const route = express.Router();

route.get('/', (req, res) => {
  res.render('index');
});

route.post('/search', (req, res) => {
  let string = req.body.string;
  axios
    .get(
      `${key.SEARCH}?api_key=${
        key.APIKEY
      }&language=en-US&query=${string}&page=1&include_adult=false`
    )
    .then(result => {
      // res.send(circularJson.stringify(result.data.results));
      res.render('results', {
        results: circularJson.parse(circularJson.stringify(result.data.results))
      });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = route;
