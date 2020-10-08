const http = require('http');

const server = http.createServer((req, resp)=>{
    const url = 'http://www.weather.com.cn/data/cityinfo/101010100.html';
    http.get(url,function(res){
        let data = "";
        res.on('data',function(chunk){
            data+=chunk;
        })
        res.on('end',()=>{
            resp.setHeader('access-control-allow-origin','*');
            resp.end(data);
        })
    })
})

server.listen(3003,'localhost',function(data){
    console.log('http://localhost:3003');
})

