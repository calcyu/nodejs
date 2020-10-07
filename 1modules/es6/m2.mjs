//声明时直接导出函数
export function f(){
    console.log('声明时导出函数')
}

//声明之后导出
function bar(){
    console.log('声明后导出函数');
}

export {bar};