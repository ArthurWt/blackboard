// 同理， 数组也可以这样解构

const arr = [1,2,3,4]


const [a, b, ...others ] = arr
console.log(a, b, others)

//结果 others = [3,4], a = 1, b = 2




