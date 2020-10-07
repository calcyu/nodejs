const fs = require('fs');
const path = require('path');


//copy
fs.readFile(path.resolve(__dirname,'name.txt')
,function(err, data){
    fs.writeFile(path
        .resolve(__dirname,'name2.txt')
    ,data,'utf8',function(err){
        if(err) throw err;
        else{
            console.log('复制成功');
        }

    })
})