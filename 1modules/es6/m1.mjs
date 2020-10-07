//1. 声明变量的同时导出

export let firstName = 'san';
export const lastName = 'zhang';

let sex = "男";
let age = 18;

export {
    sex as s,
    age as a
}
//声明时直接导出某个值
// export default 100;

let weight = 90;
export default weight;
