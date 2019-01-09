const express = require('express');
const axios = require('axios');
const circularJson = require('circular-json');

const key = require('../config/keys');

const route = express.Router();

route.get('/', (req, res) => {
  axios
    .get(`${key.URL}/popular?api_key=${key.APIKEY}`, {
      json: true
    })
    .then(results => {
      // console.log(results);
      // res.send(circularJson.stringify(results.data.results));
      // res.send(results.json());
      // res.render('pages/index', {movies: results.data.results});
      res.render('index', {
        movie: circularJson.parse(circularJson.stringify(results.data.results))
      });
    })
    .catch(err => {
      // res.render('pages/index', {movies: err});
      console.log(err);
      res.json(err);
    });
});

module.exports = route;
