let http = require('http');
let path = require('path');
let url = require('url');
let fs = require('fs');
let zlib = require("zlib");
let {promisify} = require('util');
//把一个异步方法转成一个返回promise的方法
let stat = promisify(fs.stat);
let mime = require('mime');

/** 
 * 
 *  Accept-Encoding:gzip,deflate,br
 * 
*/


http.createServer(request).listen(8081);

async function request(req, res) {
    let { pathname } = url.parse(req.url)
    let filePath = path.join(__dirname, pathname);
    try {
        let statObj = await stat(filePath);
        // 可以根据不同的文件内容类型返回不同的Content-Type
        res.setHeader('Content-Type', mime.getType(pathname));
        // 为了兼容不同的浏览器，node把所有的请求头全转成了小写
        let acceptEncoding = req.headers['accept-encoding'];
        // 内容协商
        if (acceptEncoding){
            if(acceptEncoding.match(/\bgzip\b/)){
                res.setHeader('Content-Encoding','gzip')
                fs.createReadStream(filePath).pipe(zlib.createGzip()).pipe(res);
            } else if (acceptEncoding.match(/\bdeflate\b/)) {
                res.setHeader("Content-Encoding", "deflate");
                fs.createReadStream(filePath).pipe(zlib.createDeflate()).pipe(res)
            } else{
                fs.createReadStream(filePath).pipe(res)
            }
        }else{

            fs.createReadStream(filePath).pipe(res);
        }
    } catch (e) {
        res.statusCode = 404;
        res.end();
    }
}