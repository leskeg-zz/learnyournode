var http = require('http')

var counter = 0
var arr = new Array(3)

var asyncFunction = function(url,element){
	http.get(url, function(response){
		response.setEncoding('utf8')
		arr[element]=''
		response.on('data', function(data){
			arr[element] += data;
		})
		response.on('error', function(error){
			arr[element] += error;
		})
		response.on('end', function(){
			counter+=1;
			if (counter===3) {
				arr.forEach(function(val){
					console.log(val)
				})
			}
		})
	})
}

for(var i=2;i<=process.argv.length-1;i+=1){
	asyncFunction(process.argv[i],i-2)	
}

// OTHER SOLUTION
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(err)

//       results[index] = data.toString()
//       count++

//       if (count == 3)
//         printResults()
//     }))
//   })
// }

// for (var i = 0; i < 3; i++)
//   httpGet(i)