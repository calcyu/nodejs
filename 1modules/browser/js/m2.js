//按照AMD规范编写模块代码
define(function(){
    let foo = 'AMD规范';
    function bar(){
        console.log('AMD hello world');
    }
    return {
        foo:foo,
        hello:bar
    }
});
