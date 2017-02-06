// 剩余元素的处理

const obj = {
  
  a : 1,
  b : 2, 
  c : 3,
  d : 4
}


const {a, b, ...others } = obj
console.log(a, b, others)

//结果 others = {c : 3, d : 4}, a = 1, b = 2

