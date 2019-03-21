// 非对称 2把钥匙 公钥和私钥 用公钥加密的 可以 用私钥来解密，相反也可以
// openssl rsa -in rsa_private.key -pubout -out rsa_public.key 
let crypto = require('crypto');
let fs = require('fs');
let path = require('path');
let public = fs.readFileSync(path.join(__dirname, './rsa_public.key'))
let private = fs.readFileSync(path.join(__dirname, './rsa_private.key'))
let p = crypto.publicEncrypt(public, Buffer('yyccQQu'));
let pri = crypto.privateDecrypt(private, p);
console.log(pri.toString());