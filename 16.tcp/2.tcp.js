let net = require('net');
let path = require('path');
let ws = require('fs').createWriteStream(path.join(__dirname,'./2(1).txt'));
// pipe (readale data不能同时使用)
let server = net.createServer(function(socket){
    // 监听客户输入时 将客户端输入的内容写入到文件内容
    // 默认情况下,当可读流读到末尾的时候会关闭可写流
    socket.pipe(ws,{end:false}); // 这个可写流不关闭
    // setTimeout(function(){
    //     ws.end(); // 关闭可写流
    //     socket.unpipe(ws); // 取消管道
    // },5000)
    console.log("------")
});
server.listen(8080);