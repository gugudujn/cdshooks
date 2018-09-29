var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser')
app.use(cookieParser())
 
var cors = require('cors')
var app = express()

app.use(cors())

 
// your express configuration here

app.get('/cds-services', function (req, res) {
		console.log(JSON.stringify(req.headers));
		
		// Cookies that have not been signed
		console.log('Cookies: ', req.cookies)

    	  // Cookies that have been signed
		console.log('Signed Cookies: ', req.signedCookies)
		
		fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
			
		console.log( "directory name" + __dirname );
       console.log( data );
	   //res.header("Access-Control-Allow-Origin", "*");
		//res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		console.log(JSON.stringify(res.headers));
       res.end( data );
   });
})

app.post('/cds-services/static-patient-view', function (req, res) {
	// Cookies that have not been signed
	  console.log('Cookies: ', req.cookies)

	  // Cookies that have been signed
	  console.log('Signed Cookies: ', req.signedCookies)
	console.log(JSON.stringify(req.headers));
	console.log(JSON.stringify(res.headers));
   fs.readFile( __dirname + "/" + "static-patient-greeter.json", 'utf8', function (err, data) {
       console.log( data );
	  // res.header("Access-Control-Allow-Origin", "*");
		//res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	console.log(JSON.stringify(res.headers));
       res.end( data );
   });
})


var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
  console.log("Example app listening at http://localhost:8080")
httpsServer.listen(8443);
  console.log("Example app listening at https://localhost:8443")