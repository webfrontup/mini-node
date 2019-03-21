// client
let dgram = require('dgram');
// 发消息

let socket = dgram.createSocket('udp4');
// let buf = Buffer.from("yyccQQu")
socket.send('yyccQQu',41234,function(){
    console.log('成功')
});

socket.on('message',function(data){
    console.log(data.toString());
})