class Shape{
  constructor(x, y) {
   	this.x = x
    this.y = y
  }
  
  show(){
  	console.log(`my location is : (${this.x}, ${this.y})`)
  }

}

class Rectangle extends Shape{
  
  constructor(x, y, w, h){
    super(x, y)
    this.w = w
    this.h = h
  }
  show(){
    super.show()
    console.log(`my size is : ${this.w} * ${this.h}`)
  }
}

const rect = new Rectangle(100, 100, 50, 70)

console.log(typeof rect)
console.log(rect instanceof Shape)
console.log(rect instanceof Rectangle)








