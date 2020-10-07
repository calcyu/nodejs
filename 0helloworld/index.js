//msg 不可以被改变  const let var
const msg = "hello world";
console.log('hello world');
console.log('msg:',msg);

//BOM对象中的一个方法
// alert(msg);

setTimeout(function(){
    console.log("1s:"+msg);
},1000);
//箭头函数
setTimeout(()=>{
    console.log("2s:"+msg)
},2000);


console.log('程序结束');
