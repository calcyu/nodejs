//实现了控制台的输入输出
const readline = require('readline');

const cmd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// cmd.question("机器人你好？",function(answer){
//     console.log('你的回答是？',answer);
// })

function printAndInput(msg){
    cmd.question(msg,function(answer){
        //把输入的内容中的吗去除，？变成！
        answer = answer.replace('吗','');
        answer = answer.replace('?',"!");
        answer = answer.replace('？',"!");
        answer +='\n';
        printAndInput(answer);
    })
}
printAndInput('程序已启动\n');