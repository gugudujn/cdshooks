var express = require('express');
var app = express();
var fs = require("fs");

app.get('/cds-services', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
		console.log( "directory name" + __dirname );
       console.log( data );
       res.end( data );
   });
})


app.get('/listusers', function (req, res) {
   fs.readFile( __dirname + "/" + "cdsservices.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.post('/cds-services/static-patient-greeter', function (req, res) {
   fs.readFile( __dirname + "/" + "static-patient-greeter.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

var server = app.listen(8082, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})