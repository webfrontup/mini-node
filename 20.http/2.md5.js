let crypto = require('crypto')
let path = require('path')
// let rs = require("fs").createReadStream(
//     path.resolve(__dirname + "msg.txt"),{
//         //每次读两个字节
//         highWaterMark:2
//     }
// );
// let md5 = crypto.createHash('md5');
// rs.on('data',function(data){
//     md5.update(data);//可以进行多次
// })

// rs.on('end',function(){
//     let md5Val = md5.digest('hex');
//     resizeBy.setHeader("Content-MD5", md5Val);
// })
