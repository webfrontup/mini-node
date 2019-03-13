let net = require("net");
//http://nodejs.cn/api/net.html#net_socket_connect
let socket = new net.Socket();
socket.connect(8081,'localhost',function(){
    console.log(12345);
    socket.write("hello");

});
socket.setEncoding("utf8");
socket.on('data',function(data){
    console.log("接收服务端发送过来的数据2",data)
})
setTimeout(function(){
    //要求关闭跟服务器的连接
    socket.end();


},5000)