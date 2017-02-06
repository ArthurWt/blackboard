class Shape{
  constructor(x, y) {
   	this.x = x
    this.y = y
  }
  
  show(){
  	console.log(`my location is : (${this.x}, ${this.y})`)
  }

}

const shape = new Shape(100, 200)
shape.show()
                

