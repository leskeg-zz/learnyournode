var http = require('http')

var server = http.createServer(function (req, res) {
	var fullBody = '';
    req.on('data', function(chunk) {
		fullBody += chunk.toString().toUpperCase()
    });
    req.on('end', function() {
      res.write(fullBody);     
      res.end();
    });
})
server.listen(process.argv[2])

// OTHER SOLUTION
// var http = require('http')
// var map = require('through2-map')

// var server = http.createServer(function (req, res) {
//   if (req.method != 'POST')
//     return res.end('send me a POST\n')

//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })

// server.listen(Number(process.argv[2]))