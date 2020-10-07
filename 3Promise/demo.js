//p是Promise对象的实现
const p =new Promise((resolve,reject)=>{
    //编写异步回调的代码
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve(1);
        }else{
            reject(0);
        }
    },1000);
})

p.then((data)=>{
    console.log('异步请求成功:',data);
});
p.catch((data)=>{
    console.log('异步请求失败:',data);
});