let http = require('http');
// 头分四种 通用头 请求头 响应头 实体头
// node可以做爬虫
let options = {
    hostname:'localhost',
    port:4002,
    // path: '/',
    method:'POST',
    // 告诉服务端我当前要给你发什么样的数据
    headers:{
        'Content-Type':'application/x-www-form-urlencoded',
        'Content-Length':15
    }
}
let req = http.request(options);
// 前后端通信 靠的都是json字符串
req.on('response',function(res){
    console.log(res)
    res.on('data',function(chunk){
        console.log(chunk);
    });
});
req.write('name=yyccQQu&&age=9');
// req.end('{"name":"yyccQQu"}');
