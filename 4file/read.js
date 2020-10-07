//应用程序开发包
//java jdk sdk
//nodejs开发包 
//文件读写
const fs = require('fs');
const path = require('path');

//面向API开发应用程序
console.log(__dirname);
fs.readFile(path.resolve(__dirname,"name.txt")
,function(err,data){
    if(err) throw err;
    console.log(data+"");
    console.log(new String(data).valueOf())
})



