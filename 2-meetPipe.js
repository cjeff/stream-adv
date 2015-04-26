//second activity for stream adventure nodeschool project

//we will be working with the file system

var fs = require('fs');

//the file is passed as a command-line argument
var theFile = process.argv[2];

//use the fileSystem object to stream the provided file to std out
fs.createReadStream(theFile).pipe(process.stdout);

