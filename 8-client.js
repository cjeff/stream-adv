/*

 Send an HTTP POST request to http://localhost:8099 and pipe process.stdin into
 it. Pipe the response stream to process.stdout.

 */

var request = require('request');
process.stdin.pipe(request.post('http://localhost:8099')).pipe(process.stdout);

