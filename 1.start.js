// console.log(global);
// console.warn...
// process 进程
// Buffer 缓存区
// clearImmediate setImmediate
// clearTimeout

// 在命令行中配置 
// mac export NODE_ENV=dev
// win set NODE_ENV=dev
//开发常用 process.env.NODE_ENV
let url = ''
if (process.env.NODE_ENV == 'dev'){
    url = 'http://localhost:3000'
}else{
    url = 'http://www.baidu.com'
}
console.log(url)

//异步的，在当前队列的底部
process.nextTick(function(){
    console.log('nextTick')
})
// 第二个队列中的
setImmediate(function(){
    console.log("setImmediate");
})
setTimeout(function(...args){ // this指向的是timeout自己
    console.log("setTimeout",this);
    console.log(args, "b");
    console.log(args.length);
    console.log(arguments,'arguments')
},100,'yyccQQu','1234567')





