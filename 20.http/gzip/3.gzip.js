let zlib = require('zlib');
let str = '79879823420000000000000000';
zlib.gzip(str,(err, buffer)=>{
    console.log(buffer.length)
    zlib.unzip(buffer,(err,data)=>{
        console.log(data.toString())
    })
})