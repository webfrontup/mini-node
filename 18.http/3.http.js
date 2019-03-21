let http = require('http');

let server = http.createServer(function(req,res){
    
    res.statusCode = 200;//设置响应码
    res.sendDate = false;//Date响应头默认会设置，如果真的不想要，可以设置为false


});
server.listen(8080);