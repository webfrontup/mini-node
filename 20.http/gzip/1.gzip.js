let fs = require('fs')
let zlib = require('zlib')
let path = require('path')
// current working directory 当前工作目录
console.log(process.cwd());
//用于实现压缩
//transform转换流，继承自duplex双工流
function gzip(src){
    fs.createReadStream(src).pipe(zlib.createGzip())
        .pipe(fs.createWriteStream(src+'.gz'))
}
// gzip(path.join(__dirname,'content.txt'))


// basename 从一个路径中得到文件名，包括扩展名的,可以传一个扩展名字的参数
// extname 扩展名

//解压
function gunzip(src){
    fs.createReadStream(src)
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream(path.join(__dirname,path.basename(src,'.gz'))))
}
gunzip(path.join(__dirname, "content.txt.gz"));
