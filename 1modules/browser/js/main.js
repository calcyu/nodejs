console.log('主程序已加载');

//AMD规范方式加载另一个模块的代码

require(['m1','m2'],function(m1,m2){
    console.log(m1.foo);
    m1.hello();
})