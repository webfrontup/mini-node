let net = require('net');
// 希望客户端访问服务端时 服务可以将一个文件发送给客户端
let rs = require('fs').createReadStream(__dirname+'/1.test.txt');
let server = net.createServer(function(socket){
    console.log("++++")
    rs.on('data',function(chunk){
        let flag = socket.write(chunk);//可写流缓存区是否满了
        console.log(flag);
        console.log('缓存区的大小'+socket.bufferSize);
    });
    // 发得快，写得慢，缓存就越多，最终导致缓存区抽干，触发该事件
    socket.on('drain',function(){
        console.log('抽干',"tcp缓存区中的数据已经发送")
    })
});
server.listen(8080);



// let fs = require('fs');

// fs.writeFileSync(__dirname+'/1.txt',Buffer.alloc(1024*1024*10));