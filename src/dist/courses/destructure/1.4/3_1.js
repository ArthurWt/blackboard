// 解构只能浅拷贝

const obj = {
  a : 1,
  b : 2,
  c : {x : 100, y : 100}
}
const obj1 = {...obj}

console.log(obj === obj1) // False
 
console.log(obj.c === obj1.c) // True

