var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
	parsedUrl = url.parse(req.url,true);
	date = new Date(parsedUrl.query.iso)
	switch (parsedUrl.pathname){
		case '/api/parsetime':
			var ans = { "hour":date.getHours(), "minute":date.getMinutes(), "second":date.getSeconds() }
			break
		case '/api/unixtime':
			var ans = { "unixtime" : date.getTime() }
			break
	}
	res.writeHead(200, { 'Content-Type': 'application/json' })
	res.end(JSON.stringify(ans))
})
server.listen(Number(process.argv[2]))

// OTHER SOLUTION
// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime : time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result

//   if (/^\/api\/parsetime/.test(req.url))
//     result = parsetime(time)
//   else if (/^\/api\/unixtime/.test(req.url))
//     result = unixtime(time)

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
