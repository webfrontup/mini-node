const jwt = require('jwt-simple')
const {secret} = require('./config')
module.exports = function (req, res, next) {
    let authorization = req.headers["authorization"];
    if (authorization){
        try{
            let decoded = jwt.decode(authorization.split(' ')[1],secret);
            req.user = decoded.user;
            next();
        }catch(err) {
            res.status(401).send('Not Allowed'); // 用户无权访问此资源
        }
    }else{
        res.status(401).send('Not Allowed'); // 用户无权访问此资源
    }

}