let foo = 'nodejs';

function bar(){
    console.log('hello world');
}

//CommandJS规范
exports.foo = foo;
exports.hello = bar;

// module.exports = {
//     foo:foo,
//     hello:bar
// }
console.log("modules.exporst",module.exports);
console.log("exporst",exports);
console.log(module.exports===exports);
