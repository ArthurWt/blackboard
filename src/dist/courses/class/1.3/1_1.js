// 最简单的声明方式
class A {
  constructor(){
    this.name = "ramroll"
    console.log("constructor()")
  }
  greetings() { // 定义一个函数
    console.log("hi " + this.name)
  }
}

const a = new A()

a.greetings()





