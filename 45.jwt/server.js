
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jwt-simple")
const { User } = require("./model");
const {secret} = require('./config');
const moment = require('moment')
const app = express();
const auth = require("./auth")

// 把表单格式的请求体字符转成一个对象赋给req.body application/www-form-urlencoded
app.use(bodyParser,urlencoded({ extened: true }))
// 把JSON格式的请求字符串转成一个对象赋给req.body  application/json
app.use(bodyParser.json())
// 注册
app.post('/signup',async function() {
    let user = req.body;
    let doc = await User.create(user); // 返回保存成功之后的文档对象
    res.json({
        code:0,
        user: {
            id: doc._id,
            username: doc.username
        }
    })

});
// 登录
app.post('/signin', async function () {
    let user = req.body;
    let doc = await User.findOne(user);
    if(doc){
        // 因此在此等成功了，则需要生成签名
        let token = jwt.encode({
            user: {
                id: doc._id,
                username: doc.username
            },
            // exp: new Date(Date.now()+10*60*1000).getTime()/1000
            exp: moment().add(10, 'minutes').valueOf() // 指定过期时间
        }, secret);
        res.json({
            code: 0,
            data: {
                token
            }
        })

    }else{
        res.json({
            code: 1,
            error: '用户名或密码错误'
        })
    }

});
// 用户页面是一个受保护的资源
app.post('/user', auth, function (req,res) {
    res.json({
        user: req.user
    });

});
app.listen(8088)


