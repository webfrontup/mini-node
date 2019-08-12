let fs = require('fs');
let path = require('path');
// 删除文件为
function wide(dir,callback){
    // 目录是不是文件
    let arr = [dir];
    let index = 0;
    function rmdir(){
        function next(){
            let current = arr[--index];
            if(!current) return callback();
            fs.stat(current,function(err,stat){
                if (stat&&stat.isDirectory()) {// 对象描述文件系统目录，则返回 true。
                    fs.rmdir(current,next)
                }else{
                    fs.unlink(current,next)
                }
            })
        }
        next();
    }
    function next(){
        if(index === arr.length) return rmdir()
        let current = arr[index++];
        fs.stat(current,function(err,stat){
            if (stat&&stat.isDirectory()){
                fs.readdir(current,function(err,files){ // [b,c]
                    arr = [...arr,...files.map(file=>{
                        return path.join(current,file);
                    })];
                    next();
                });
            }else{
                next();
            }
        })
    }
    next();
}
// wide('./a.txt', function () {
//     console.log('删除成功')
// })
var Dir = "a.txt";
var Path = "./a";
deleteFile(Path, Dir);

function deleteFile(paths,dir) {
	var files = fs.readdirSync(paths);
	files.forEach(function(file) {
		if (fs.statSync(paths + "/" + file).isFile()) {
            var dir = paths + "/" + file;
            wide(dir, function () {
                console.log('删除成功')
                console.log(file, dir);
            })
            console.log(file, dir);
		} else {
            console.log(paths + "/" + file, "pathFile");
            var filez = paths + "/" + file;
            var dirz = filez + dir;
            deleteFile(filez, dirz);
		}
    });
    
}
