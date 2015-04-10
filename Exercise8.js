var http = require('http');

http.get(process.argv[2], function(response){
	response.setEncoding('utf8');
	var fullData='';
	response.on('data', function(data){
		fullData += data;
	});
	response.on('error', function(error){
		fullData += error;
	});
	response.on('end', function(){
		console.log(fullData.length);
		console.log(fullData);
	});
});

// OTHER SOLUTION
// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))  
// })
