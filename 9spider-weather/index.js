const http = require('http');
const path = require('path');
const fs = require('fs');

const url = 'http://www.weather.com.cn/data/cityinfo/101010100.html';

http.get(url,function(res){
    let data="";
    res.on('data',function(chunk){
        data+=chunk;
    })
    res.on('end',function(){
        console.log('获取成功');
        console.log(data);
        fs.writeFile(path.resolve(__dirname,'w.txt')
        ,data,'utf8',function(err){
            if(err) throw err;
            console.log('保存成功');
        })
    })
})

