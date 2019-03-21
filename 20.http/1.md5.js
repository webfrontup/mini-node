let crypto = require("crypto");

console.log(crypto.getHashes());

let md5 = crypto.createHash("md5");
md5.update("123456"); //指定要加密的值
md5.update("world"); //再次添加要加密的值

console.log(md5.digest('hex'))//指定输出的格式 hex 16进制





