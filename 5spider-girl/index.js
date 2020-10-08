/**
 * 下载百度的美女图片
 * 1.nodejs可以模拟发送http请求
 * 2.下载文件
 * 3. 
 * 3.把下载文件的二进制数据写入本地磁盘
 */
//发送http请求包
const https = require('https');
//快速解析html文本内容,通过cheerio获取html中的img的src
const cheerio = require('cheerio');
const download = require('download');
const path = require('path');

const url = 'https://image.baidu.com/search/index?tn=baiduimage&ipn=r&ct=201326592&cl=2&lm=-1&st=-1&fm=result&fr=&sf=1&fmq=1597295854493_R&pv=&ic=&nc=1&z=&hd=&latest=&copyright=&se=1&showtab=0&fb=0&width=&height=&face=0&istype=2&ie=utf-8&ctd=1597295854495%5E00_1519X343&sid=&word=%E5%B8%85%E5%93%A5';

//发送get请求 
https.get(url,function(response){
    let data="";
    response.on('data',function(chunk){
        data+=chunk;
    })
    response.on('end',function(){
        console.log('http响应结束')
        // console.log(data);
        //解析图片的地址
        parseImg(data);
    })
})

function parseImg(html){
    const $ = cheerio.load(html);
    // console.log(html);
    const imgArr = $('.imglist .imgbox img');
    // console.log(imgArr);
    let imgUrl = [];
    // imgArr.each(function(index, item){
    //     imgUrl.push($(item).attr('src'));
    // })
    // imgArr = [];
    imgArr.each((index, item)=>{
        imgUrl.push($(item).attr('src'));
    })
    //map方法，根据返回的内容生成一个新的数组
    // let task = imgUrl.map(function(item){
    //     return `<h2>${item}</h2>`;
    // })
    // task = imgUrl.map((item)=>{
    //     return `<h2>${item}</h2>`;
    // })
    const task = imgUrl
    .map(item=>download(item,
        path.resolve(__dirname,'girls')));
    // console.log(task);
    Promise.all(task).then(()=>{
        console.log('所有图片下载完成');
    })

}