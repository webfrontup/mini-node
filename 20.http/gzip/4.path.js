let path = require('path');
let str = '/a/b/l/zzz.jpg';
console.log(path.basename(str,'.jpg'))///zzz.jpg
console.log(path.extname(str))