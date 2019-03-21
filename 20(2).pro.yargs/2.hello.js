let yargs = require('yargs')
// 它可以帮我们解析命令行参数，把参数转换成对象的形式
// 执行 node 2.hello.js --name yyccQQu

let argv = yargs.argv;
// [    _:[].
//     help: false,
//     version: false,
//     name: yyccQQu,
//     '$0': '2.hello.js'
// ]

// { _: [ 1234 ], '$0': '2.hello.js' }
console.log(argv)

let argv2 = yargs.options('n',{
    //node 2.hello.js --name yyccQQu
    alias: 'name', //别名
    demand: true, //必填
    default: 'yyccQQu',
    description: '请输入姓名'

}).usage('usage zf-server [options]')
.alias('h', 'help')
.example('zf-server --port 3000 ')
.argv;
//{ _: [], name: 'abc', n: 'abc', '$0': '2.hello.js' }
// console.log("hello", argv2.name)

// node 2.hello.js --h
// console.log(argv2)

