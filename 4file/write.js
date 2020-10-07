const fs = require('fs');
const path = require('path');
const cmd = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

cmd.question('请输入你的名称：'
    , function (name) {
        cmd.question('请输入年龄', function (age) {
            //写入文件
            const data = name+'\n'+age;
            fs.writeFile(
                path.resolve(__dirname, 'info.txt'), data, 'utf8',
                function (err) {
                    if (err)
                        throw err;
                    else
                        console.log('写入成功');
                })
        })
    })

