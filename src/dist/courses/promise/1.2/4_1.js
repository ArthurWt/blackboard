// 用Promise表示一个永远不会返回的值
function gone(){
  return new Promise( (resolve, reject) => {
  	// 什么也不做  
  })
}

const promise = gone()
promise.then( () => {
  alert("never") // 不会被触发
  
})





