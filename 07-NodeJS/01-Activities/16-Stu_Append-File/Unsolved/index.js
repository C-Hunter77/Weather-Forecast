// TODO: What are we importing?
// We are importing the file system module from Node.js
import fs from 'fs';

// TODO: Add comments to explain each of the three arguments of appendFile()
// The first argument is the file path to the file that we want to append to
// The second argument is the data that we want to append to the file
// The third argument is a callback function that will be called once the file has been appended to
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // If there is an error, log the error to the console. Otherwise, log "Commit logged!" to the console
  err ? console.error(err) : console.log('Commit logged!')
);
