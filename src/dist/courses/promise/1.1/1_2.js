// Promise中的代码段被直接执行了
const promise = new Promise( (resolve, reject) => {
	document.body.append("hello")
})

const a = () => {
  document.body.append(" world")
}
a()


















