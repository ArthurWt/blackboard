class A{
  constructor(){
    this.className = "123" 
  }
   
  change(newClassName){
  	this.className = newClassName
  }
}

const a = new A()
const b = new A()
console.log(A.className)
console.log(a.className)
console.log(b.className)

a.change("456")

console.log(A.className)
console.log(a.className)
console.log(b.className)



