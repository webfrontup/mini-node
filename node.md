## nodejs
- 主线程是单线程(异步)callback，将后续的逻辑写成函数，传入到当前的函数中，当执行的函数得到了结果后，执行传人的函数
- repl环境 (read eval print loop)

## web异步
- setTimeout
- callback

## 同步和异步 阻塞和非阻塞
- 同步和异步关注的是消息的通知方式
- 同步就是发出调用后，没有得到结果之前，该调用不返回，一旦调用返回就得到返回值了，简而言之就是调用者主动等待这个调用结果
- 当一个异步过程调用发出后，调用者不会立刻得到结果，而是调用发出后，被调用者通过状态/通知/或回调函数处理这个调用

- 阻塞和非阻塞关注的是程序在等待调用结果的状态
- 阻塞调用是指调用结果返回之前，当前线程会被刮起，调用线程只有在得到结果之后才会返回
- 非阻塞调用指在不能立刻得到结果之前，该调用不会阻塞当前线程


#### 项目依赖
- 开发时使用，上线还需要

#### 开发依赖
- 开发时使用，上线不需要

## 想要发包
- 先回到国外 nrm use npm
- 包名不能和已有的包一致
- 入口文件
- 注册账号

```
npm addUser
```
- 发布

```
npm publish
```



## 转码
```
    let iconv = require("iconv-lite")
    fs.readFile('2.txt',function(err,data){
        // 把GBK编码的buffer转成UTF8字符串
        let str = iconv.decode(data,'gbk')
        console.log(str,'strgbk')
    })
```
