class Shape{
    
}


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








