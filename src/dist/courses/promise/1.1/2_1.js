// 用Promise表示一个未来的值
function resolve_example(){
  const promise = new Promise( (resolve, reject) => {
    document.body.append("start...")
    
    // 用setTimeout延迟触发resolve
    setTimeout( () => {
      resolve('done')
    }, 2000)
      
  } )
  return promise
}

const promise = resolve_example()

// 得到了一个未来完成的值
promise.then( data => {
    document.body.append(data)  
})









