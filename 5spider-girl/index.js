/**
 * 下载百度的美女图片
 * 1.nodejs可以模拟发送http请求
 * 2.下载文件
 * 3. 
 * 3.把下载文件的二进制数据写入本地磁盘
 */
const https = require('https');

const url = 'https://geek5.cn';

//发送get请求 
https.get(url,function(response){
    let data="";
    response.on('data',function(chunk){
        data+=chunk;
    })
    response.on('end',function(){
        console.log('http响应结束')
        console.log(data);
    })
})