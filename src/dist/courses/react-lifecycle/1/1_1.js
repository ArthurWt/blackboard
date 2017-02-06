// 纯函数f
// 输出只和输入有关
function f(x, y) {
  return x + y 
}

// f1不是纯函数
// 因为a 可以在其他地方改变
var a = 10
function f1(y){
  return a + y
}



