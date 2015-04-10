var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })
})

// OTHER SOLUTION
// var fs = require('fs');
// var path = require('path');
// var ext = process.argv[3];
// var fileList;

// var getResult = function(result){
// 	fileList = result;
// 	filterExt(fileList,ext);
// }


// fs.readdir(process.argv[2],function(err,list){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		getResult(list);
// 	}
// });

// var filterExt = function(list,ext){
// 	list.forEach(function(val,index,array){
// 		if (path.extname(val).substr(1) === ext ){
// 			console.log(val);
// 		}
// 	});
// }