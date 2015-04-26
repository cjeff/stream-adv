//fifth activity for stream adventure nodeschool project
/*

 Instead of transforming every line as in the previous "TRANSFORM" example,
 for this challenge, convert even-numbered lines to upper-case and odd-numbered
 lines to lower-case. Consider the first line to be odd-numbered. For example
 given this input:

 One
 Two
 Three
 Four

 Your program should output:

 one
 TWO
 three
 FOUR


 */

//we are using an npm module, 'through2'
var through2 = require('through2');

//You can use the `split` module to split input by newlines.

var split = require('split');

/* A transform stream takes input data and applies an operation to the data to
 produce the output data. */

//Create a through stream with a `write` and (optional) `end` function:

//var lineCount = 0;
//Create a transform stream using through2 module

var lineCount = 0;

var transform = through2(function (buffer, encoding, next) {
    /* call `this.push()` to produce output data and call
     `next()` when you're ready to receive the next chunk */
    //even lines get uppercase, odd lowercase

    //get used to simpler if/then syntax
    lineCount % 2 === 0
        ? this.push("\n" + buffer.toString().toLowerCase())
        : this.push("\n" + buffer.toString().toUpperCase())
    //incrememt linecount
    lineCount++;
    next();

});

//the `end` function is called when there is no more data. it is not needed so it has been removed



/* pipe `process.stdin` into your transform stream
 and pipe your transform stream into `process.stdout` */

//you can use .pipe() on new lines for legibility
process.stdin
    .pipe(split())
    .pipe(transform)
    .pipe(process.stdout);

/* Here is the reference solution:

 var through = require('through2');
 var split = require('split');

 var lineCount = 0;
 var tr = through(function (buf, _, next) {
 var line = buf.toString();
 this.push(lineCount % 2 === 0
 ? line.toLowerCase() + '\n'
 : line.toUpperCase() + '\n'
 );
 lineCount ++;
 next();
 });
 process.stdin
 .pipe(split())
 .pipe(tr)
 .pipe(process.stdout)
 ;

 */

