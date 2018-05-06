var http = require('http');
var server = http.createServer(function(request, response) {
	response.writeHead(200, {
		"Context-type" : "text/plain"
	});

	response.write("Your url is: " + resquest.url);
	response.end();
});

server.listen(3000, function() {
	console.log("Connected Successfull");
});
