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
    const value = req.url.substr(req.url.indexOf('=')+1);
    const keys = ['javascript','js','css'];
    const result = keys.filter((k)=>{
        return k.indexOf(value)>=0;
    })
    const el = result.map((item)=>`<li>${item}</li>`);
    console.log(result);
    //乱码问题
    resp.setHeader('content-type'
    ,'text/html;charset=utf8')
    resp.end(`
    <html>
        <body>
            <h2>你好 nodejs!!</h2>
            <h3>你输入的关键字：${value}</h3>
            <div>${req.url}</div>
            <ul>
                ${el.join("")}
            </ul>
        </body>
    </html>
    `);
})

server.listen(3000,'localhost',function(){
    console.log('web服务启动成功http://localhost:3000/');
})