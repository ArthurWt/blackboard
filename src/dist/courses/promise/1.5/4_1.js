// Then.... Promise ... Then

Promise.resolve('hello')
.then ( data => {
  console.log(data)
 
  return new Promise( (resolve, reject) => {
    fetch("https://ketang.zhufengpeixun.cn/token")
    .then(response => {
    	response.json().then( jsonData => {
          resolve(jsonData)
        })
    })
  })
})
.then( jsonData => {
  console.log(jsonData)
})





