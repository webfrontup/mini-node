// Buffer是global上的属性
// 申请内存 可以存放 图片 文本
// 他长得很像数组
// 创建一个长度为 6、且用 0x1 填充的 Buffer。
let buffers = Buffer.alloc(6, 1); // 这种申请方式内存永远是干净的,声明也比较耗时
console.log("buffers", buffers); // <Buffer 01 01 01 01 01 01>

let buffer = Buffer.allocUnsafe(6); // 他声明buffer比较快

// buf.fill(value[, offset][, end])
// 使用指定的 value 来填充这个 buffer。如果没有指定 offset(默认是 0) 并且 end(默认是 buffer.length) ，将会填充整个buffer。

buffer.fill(1, 3, 5); // 没用的部分可以帮我们清空
console.log(buffer); // <Buffer 00 00 00 01 01 00>

let bufferr = Buffer.alloc(6, 1); // 你知道buffer存的都是16进制 
console.log(bufferr); // <Buffer 01 01 01 01 01 01>

// 1）通过长度来申请
// 2）通过字符串来申请
// 创建一个包含 UTF-8 字节
console.log(Buffer.from('yyccQQu培训')); // 不支持gbk node中只支持utf8 
// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');

// 3）通过数组构建buffer
console.log(Buffer.from([16, 17, 18]));

// 把buffer和字符串进行转化
// 创建一个长度为 10、且用 0 填充的 Buffer。
let bufferf = Buffer.alloc(12); //返回一个指定大小的 Buffer 实例
let buf1 = "偏";
let buf2 = "移培训";
// 写入的内容 ， 偏移量 , 长度
bufferf.write(buf1, 0, 3, 'utf8');
bufferf.write(buf2, 3, 9, 'utf8');
console.log(bufferf.toString());


let bufferv = Buffer.alloc(12);
let buf11 = '偏移培'
let buf22 = '训' // 训偏移培

bufferv.write(buf11, 3, 9);
bufferv.write(buf22, 0, 3);
console.log(bufferv.toString())//位置拼接


// slice   copy   concat   indexOf split
// slice是深拷贝还是浅拷贝
// slice和concat这两个方法，仅适用于对不包含引用对象的一维数组的深拷贝
let arr = [1, [1], 3, 4];
let newArr = arr.slice(1, 2);
newArr[0][0] = 2;
console.log(arr); // [ 1, [ 2 ], 3, 4 ]
// https://www.cnblogs.com/baiyangyuanzi/p/6518218.html
// buffer和数组中的二维数组是一样的 buffer里存的都是内存地址

let bufferb = Buffer.alloc(6, 1);
let newBuffer = bufferb.slice(0, 3);
console.log(newBuffer, "newBuffer"); //<Buffer 01 01 01>
newBuffer[0] = 100;
console.log(bufferb, newBuffer); // <Buffer 64 01 01 01 01 01> <Buffer 64 01 01>

let buffern = Buffer.alloc(6);
let buf13 = Buffer.from('姜');
let buf23 = Buffer.from('武');
//  培姜
// targetBuffer offset sourceStart sourceEnd
Buffer.prototype.myCopy = function (targetBuffer, offset, sourceStart, sourceEnd) {
    for (let i = sourceStart; i < sourceEnd; i++) {
        targetBuffer[offset++] = this[i];
    }
}
buf13.myCopy(buffern, 3, 0, 3);
buf23.myCopy(buffern, 0, 0, 3);
console.log(buffern.toString());


// Buffer
let buffer1 = Buffer.from('姜');
let buffer2 = Buffer.from('文');
// 多写的内容就是0
// http tcp  
Buffer.myconcat = function (list, totalLength) {
    if (list.length == 1) {
        return list[0];
    }
    if (typeof totalLength === "undefined") {
        totalLength = list.reduce((prev, next) => {
            return prev + next.length
        }, 0)
    }
    let buf = Buffer.alloc(totalLength); // 创建这么大的buffer
    let pos = 0; // 记忆当前拷贝的位置
    list.forEach(function (buffer, index) { // [[1,2,3],[4,5,6]]
        for (var i = 0; i < buffer.length; i++) {
            buf[pos++] = buffer[i];
        }
    })
    return buf.fill(0, pos)
}

console.log(Buffer.myconcat([buffer1, buffer2, buffer1, buffer2]));


let buffer22 = Buffer.from('yyccQQu-偏-培-偏-训');
console.log(buffer22.indexOf('--',8)); // buffer的indexOf取的是buffer的长度
// split 分割方法  [buffer6,buffer3,buffer3];
Buffer.prototype.split = function(sep){ //
    let arr = [];
    let len = Buffer.from(sep).length;
    let pos = 0;
    while(-1!=(index = this.indexOf(sep,pos))){
        arr.push(this.slice(pos,index));
        pos = index+len
    }
    arr.push(this.slice(pos))
    return arr;
}
console.log(buffer22.split('偏').map(item=>item.toString()));
// 后面会用到

// buffers <Buffer 01 01 01 01 01 01>
// <Buffer 28 09 70 01 01 00>
// <Buffer 01 01 01 01 01 01>
// <Buffer 79 79 63 63 51 51 75 e5 9f b9 e8 ae ad>
// <Buffer 10 11 12>
// 偏移培训
// 训偏移培
// [ 1, [ 2 ], 3, 4 ]
// <Buffer 01 01 01> 'newBuffer'
// <Buffer 64 01 01 01 01 01> <Buffer 64 01 01>
// 武姜
// <Buffer e5 a7 9c e6 96 87 e5 a7 9c e6 96 87>
// -1
// [ 'yyccQQu-', '-培-', '-训' ]