const http = require('http');
//web服务程序
/*
    用户发送http请求时，触发该函数的执行
    两个参数  request对象  response对象
    request中保存的是请求相关的信息
    response中保存的是响应给客户端的内容
    请求地址 */
const server = http.createServer(
    (req, resp)=>{
    console.log(req.url);
    //乱码问题
    resp.setHeader('content-type'
    ,'text/html;charset=utf8')
    resp.end(`
    <html>
        <body>
            <h2>你好 nodejs!!</h2>
            <div>${req.url}</div>
        </body>
    </html>
    `);
})

server.listen(3000,'localhost',function(){
    console.log('web服务启动成功http://localhost:3000/');
})