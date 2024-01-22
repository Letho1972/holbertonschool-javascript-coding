#!/usr/bin/node

// Write a script that reads and prints the content of a file.

const fs = require('fs');

if (process.argv.length !== 3) {
  console.log('Usage: node readfile.js <file_path>');
  process.exit(1);
}

// Get the file path from the command line arguments
const filePath = process.argv[2];

// Read the content of the file in utf-8
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    // If an error occurred during reading, print the error object
    console.error('Error reading the file:', err);
  } else {
    // Print the content of the file
    console.log('File content:\n', data);
  }
});
