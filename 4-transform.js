//fourth activity for stream adventure nodeschool project
/* "Convert data from `process.stdin` to upper-case data on `process.stdout`
 using the `through2` module." */

//we are using an npm module, 'through2'
var through2 = require('through2');

/* A transform stream takes input data and applies an operation to the data to
produce the output data. */

//Create a through stream with a `write` and (optional) `end` function:
var stream = through2(write,end);

//The `write` function is called for every buffer of available input:

function write(buffer, encoding, next) {
/* call `this.push()` to produce output data and call
 `next()` when you're ready to receive the next chunk */
    this.push(buffer.toString().toUpperCase());
    next();

 }

//the `end` function is called when there is no more data
//this function was not needed for this exercise - could have been left unwritten

function end(done) {
//call `done()` to finish the output
    done();
}

/* pipe `process.stdin` into your transform stream
 and pipe your transform stream into `process.stdout` */

process.stdin.pipe(stream).pipe(process.stdout);

/* Here is the reference solution:

 var through = require('through2');
 var tr = through(function (buf, _, next) {
 this.push(buf.toString().toUpperCase());
 next();
 });
 process.stdin.pipe(tr).pipe(process.stdout);
*/

