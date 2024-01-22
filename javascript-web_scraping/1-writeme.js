#!/usr/bin/node

// Write a script that writes a string to a file.

const fs = require('fs');
const filePath = process.argv[2];
const contentToWrite = process.argv[3];

// Write the content to the file in utf-8
fs.writeFile(filePath, contentToWrite, 'utf-8', (err) => {
  if (err) {
    // If an error occurred during writing, print the error object
    console.error(err);
  }
});
