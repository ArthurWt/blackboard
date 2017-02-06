class A{
  static className = "123" 

  change(){
  	A.className = "456"
  }
}

const a = new A()
const b = new A()
console.log(A.className)
console.log(a.className)
console.log(b.className)

a.change()

console.log(A.className)



