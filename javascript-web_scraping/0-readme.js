#!/usr/bin/node

// Write a script that reads and prints the content of a file.

const fs = require('fs');

// Read the content of the file in utf-8
fs.readFile('cisfun', 'utf-8', (err, data) => {
  if (err) {
    // If an error occurred during reading, print the error object
    console.error(err);
  } else {
    // Print the content of the file
    console.log(data);
  }
});
