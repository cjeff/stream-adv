/*

 Your program will get some html written to stdin. Convert all the inner html to
 upper-case for elements with a class name of "loud",
 and pipe all the html to stdout.

 You can use `trumpet` and `through2` to solve this adventure.

 With `trumpet` you can create a transform stream from a css selector:

 var trumpet = require('trumpet');
 var fs = require('fs');
 var tr = trumpet();
 fs.createReadStream('input.html').pipe(tr);

 var stream = tr.select('.beep').createStream();

 Now `stream` outputs all the inner html content at `'.beep'` and the data you
 write to `stream` will appear as the new inner html content.

 Make sure to `npm install trumpet through2` in the directory where your solution
 file lives.



 */


var trumpet = require('trumpet');
var through = require('through2');

var upcase = through(function(buf, enc, next){
    this.push(buf.toString().toUpperCase());
    next();
});

//create trumpet instance
var tr = trumpet();



// create selection of class loud on trumpet object (transform pipe)
var loudStream = tr.select('.loud').createStream()

loudStream.pipe(upcase).pipe(loudStream);


//fstdin - transform - std out pipe
process.stdin.pipe(tr).pipe(process.stdout);


/*

 Here's the reference solution:

 var trumpet = require('trumpet');
 var through = require('through2');
 var tr = trumpet();

 var loud = tr.select('.loud').createStream();
 loud.pipe(through(function (buf, _, next) {
 this.push(buf.toString().toUpperCase());
 next();
 })).pipe(loud);

 process.stdin.pipe(tr).pipe(process.stdout);


 */