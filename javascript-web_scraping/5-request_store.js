#!/usr/bin/node

// Write a script that gets the contents of a webpage and stores it in a file.

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

if (!url || !filePath) {
  console.error('Usage: node script.js <URL> <FilePath>');
  process.exit(1);
}

request(url, (error, response, body) => {
  if (error) {
    console.error(`Error fetching ${url}: ${error.message}`);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Failed to fetch ${url}. Status code: ${response.statusCode}`);
    process.exit(1);
  }

  fs.writeFileSync(filePath, body, 'utf-8');
  console.log(`Successfully saved the contents of ${url} to ${filePath}`);
});
