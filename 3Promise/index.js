const cmd = require('readline')
.createInterface({
    input: process.stdin,
    output: process.stdout
})

cmd.question('我手机没电了！可以看下你的手机地图？'
,answer=>{
    if(answer=='可以'){
        cmd.question('我想知道怎么走进你的心里！',(answer)=>{

        })
    }
});
//Promise es6




