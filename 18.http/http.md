## 关于HTTP
- http://www.zhufengpeixun.com/plan/html/14.http-1.html#t335.2%20%E8%AF%B7%E6%B1%82%E9%A6%96%E9%83%A8%E5%AD%97%E6%AE%B5
- 要知道http服务器和tcp服务器的关系
- 
```
    rs.pipe(res);
    rs.on('data'function(data){
        res.write(data);
    })
```

- cwd和__dirname的区别(cwd:当前工作目录,可以通过process.chdir()来改变。__dirname 只要说要执行的脚本确定了，它所有的目录就确定了，不可能改变。)
- 加密主要用于服务端与客户端通信的时候