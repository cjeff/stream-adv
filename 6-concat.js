//sixth activity for stream adventure nodeschool project
/*

 You will be given text on process.stdin. Buffer the text and reverse it using
 the `concat-stream` module before writing it to stdout.

 `concat-stream` is a write stream that you can pass a callback to get the
 complete contents of a stream as a single buffer. Here's an example that uses
 concat to buffer POST content in order to JSON.parse() the submitted data:



 */

//we are using an npm module, 'concat-stream'
var concat = require('concat-stream');


/*
LESSON:
you only pipe the input into the concat function
The concat is the endpoint - you do not pipe it further
(Think of this as a "sum", rather than a "for each")
you call the next step within the concat function - in this case, outputting
 */

process.stdin.pipe(concat(function (src) {
    var s = src.toString().split('').reverse().join('');
    //same as console.log(s)
    process.stdout.write(s);
}));


