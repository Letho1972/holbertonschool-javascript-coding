#!/usr/bin/node

// Write a script that prints the number of movies where the character “Wedge Antilles” is present.

const request = require('request');
const apiURL = process.argv[2];
const characterID = 18;

request(apiURL, (err, response, body) => {
  if (err) {
    console.error(err);
  } else {
    const movieData = JSON.parse(body).results;
    const moviesWithWedgeAntilles = movieData.filter((movie) =>
      movie.characters.includes(`https://swapi-api.hbtn.io/api/people/${characterID}/`)
    );
    console.log(moviesWithWedgeAntilles.length);
  }
});
