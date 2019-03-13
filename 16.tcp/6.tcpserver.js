//写一个聊天室 可以设置昵称 可以广播
let net = require('net');


function broadcast(nickname, content) {
    Object.keys(clients).forEach(item => {
        if (clients[item].nickname != nickname) {
            clients[item].socket.write(content + '\r\n')
        }
    })
}

let server = net.createServer(function(socket){
    socket.setEncoding('utf8');
    let key = socket.remoteAddress + socket.remotePort; // 唯一


    server.getConnections((err, count) => {
      socket.write(`欢迎来到聊天室 当前用户${count}个\r\n`);
    });
    
    let username;
    socket.on('data',function(data){
        console.log(data);
        data = data.replace(/\r\n/,'');
        if(username){
            broadcast(username, `${username}:${data}`);
        }else{
            username = data;//把用户的输入的信息当成用户名
            clients[username] = socket;//缓存用户的socket,方便以后广播用
            broadcast(username, `欢迎${username}加入聊天室`)//向所有的客户端发送信息
        }
    });

    socket.on('end',function(){
        broadcast(username, `${username}离开聊天室`);
        clients[username].destory();//销毁此socket
        delete clients[username]
    });

});

server.on('connection',function(){
    console.log('客户端连接')
})
server.listen(8080,function(){
    console.log('tcp聊天室启动成功,信息是',server.address())
});