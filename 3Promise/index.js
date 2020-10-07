const cmd = require('readline')
.createInterface({
    input: process.stdin,
    output: process.stdout
})

// cmd.question('我手机没电了！可以看下你的手机地图？'
// ,answer=>{
//     if(answer=='可以'){
//         cmd.question('我想知道怎么走进你的心里！',(answer)=>{

//         })
//     }
// });
//Promise es6
function quiz(msg){
    return new Promise((resolve,reject)=>{
        cmd.question(msg,function(answer){
            resolve(answer);
        })
    })
}
quiz('可以看下你的手机吗？').then((answer)=>{
    if(answer=='可以'){
        quiz('走进你的心里可好！').then((answer)=>{
            console.log(answer);
        })
    }
})




