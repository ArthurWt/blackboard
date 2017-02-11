// this 指针也可以用作函数调用
class A {
  constructor(){
    this.name = "ramroll"
    console.log("constructor()")
  }
  greetings() { // 定义一个函数
    console.log("hi " + this.getName())
  }
  
  getName(){
  	return this.name  
  }
}

const a = new A()

a.greetings()






