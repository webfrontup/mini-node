function Promise(executor){ //executor执行器
    let self = this;
    self.status = 'pending'; //等待态
    self.value  = undefined; // 表示当前成功的值
    self.reason = undefined; // 表示是失败的值
    function resolve(value){ // 成功的方法
        if(self.status === 'pending'){
            self.status = 'resolved';
            self.value = value;
        }
    }
    function reject(reason){ //失败的方法
        if(self.status === 'pending'){
            self.status = 'rejected';
            self.reason = reason;
        }
    }
    executor(resolve,reject);
}
Promise.prototype.then = function(onFufiled,onRejected){
    let self = this;
    if(self.status === 'resolved'){
        onFufiled(self.value);
    }
    if(self.status === 'rejected'){
        onRejected(self.reason);
    }
}
module.exports = Promise;

// executor
// 為一個依序接收兩個參數的函式：resolve 及 reject（實現及拒絕回呼函式）。
// 在 Promise 實作中，executor 函式在傳入參數 resolve 與 reject 後會立刻執行（executor 函式會在 Promise 建構式回傳 Promise 物件前被執行）。
// resolve 與 reject 函式，會在被個別呼叫時，個別執行之。通常 executor 函式會發起一些非同步操作。
// 接著，成功完成後執行 resolve 以完成 promise；或如果有錯誤，執行 rejects。
// 如果 executor 函式在執行中拋出錯誤，promise 會被拒絕（rejected），回傳值也將被忽略。