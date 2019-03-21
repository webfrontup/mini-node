// server
let dgram = require('dgram');

//udp4 udp6
let socket = dgram.createSocket('udp4');
// 监听一个端口 数据到来时 可以读出信息
// 收消息 在本机的41234端口上监听消息
socket.bind(41234,'localhost',function(){
    socket.on('message',function(data,rinfo){
        console.log(data.toString());
        socket.send('hello',rinfo.port);
    })
});