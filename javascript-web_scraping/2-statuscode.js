#!/usr/bin/node

// Write a script that display the status code of a GET request.

const request = require('request');
const url = process.argv[2];

// Function to make a GET request and display the status code
function getStatus (url) {
  // Make a GET request
  request(url, (error, response) => {
    if (error) {
      console.error('Error:', error);
    } else {
      // Display the status code
      console.log('code:', response.statusCode);
    }
  });
}

// Check if the URL is provided as an argument
if (url) {
  // Call the function with the provided URL
  getStatus(url);
} else {
  console.error('Please provide a URL as an argument.');
}
