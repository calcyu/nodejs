//p是Promise对象的实现
/**
 * 三个状态
 * 1. 初始化状态 pendding
 * 2. 成功状态 fullfilled
 * 3. 失败状态 rejected
 */
const p =new Promise((resolve,reject)=>{
    //编写异步回调的代码
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve(1);//成功
        }else{
            reject(0);//失败
        }
    },1000);
})

console.log(p);

p.then((data)=>{
    console.log('异步请求成功:',data);
});
p.catch((data)=>{
    console.log('异步请求失败:',data);
});