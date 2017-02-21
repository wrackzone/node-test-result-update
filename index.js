var fs = require('fs');

console.log("Hello World")

var parser = require('junit-xml-parser').parser;
var filename = "/Users/Shared/Jenkins/Home/workspace/HelloWorld/build/junit/TEST-sample.HelloWorldTest.xml";

fs.readFile(filename, 'utf8', function (err,data) {
	if (err) {
    	return console.log(err);
  	} else {
  		// console.log("data",data);
		parser.parse(data).then(function (results) { 
			console.log( "Tests:",results.suite.tests.length );
		});
	}
});

console.log("done!");

