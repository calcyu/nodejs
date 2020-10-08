const http = require('http');

const server = http.createServer((req, resp)=>{
    console.log(req.url, req.url.startsWith('/weather'));
    const weatherInfo = {
        weatherInfo:{
            city:'北京',
            temp1: "18度",
            temp2:'31度',
            weather: '多云转阴'
        }
    }
    if(req.url.startsWith('/weather')){
        //* 所有域名都可以访问
        resp.setHeader('Access-Control-Allow-Origin','*');
        resp.setHeader('content-type','text/html;charset=utf8');
        const jsonStr = JSON.stringify(weatherInfo);
        console.log(jsonStr);
        resp.end(jsonStr);
    }else if(req.url.startsWith('/jsonp.js')){
        resp.end(`
            foo(${JSON.stringify(weatherInfo)});
        `)
    }
    else{
        resp.end('url error');
    }
})

server.listen(3333,'localhost',()=>{
    console.log('http://localhost:3333');
})
