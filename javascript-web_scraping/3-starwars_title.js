#!/usr/bin/node

// Write a script that prints the title of a Star Wars movie.

const fetch = require('node-fetch');

// Function to fetch Star Wars movie information by ID
async function getStarWarsMovieTitle (movieId) {
  const apiUrl = `https://swapi-api.hbtn.io/api/films/${movieId}`;

  try {
    const response = await fetch(apiUrl);
    const movieData = await response.json();

    if (response.ok) {
      const { title } = movieData;
      console.log(`${title}`);
    } else {
      console.error(`${response.statusText}`);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

// Check if the movie ID is provided as a command-line argument
const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error('Usage: node script.js <movie_id>');
} else {
  const movieId = parseInt(args[0]);

  if (isNaN(movieId) || movieId <= 0) {
    console.error('Invalid movie ID. Please provide a positive integer.');
  } else {
    // Call the function with the provided movie ID
    getStarWarsMovieTitle(movieId);
  }
}
