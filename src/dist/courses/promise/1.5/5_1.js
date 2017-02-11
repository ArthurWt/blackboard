// Then.... Promise ... Then
// 化简版
Promise.resolve('hello')
.then ( data => {
  console.log(data)
  
  return fetch("https://ketang.zhufengpeixun.cn/token")
  
})
.then( response  => {
  return response.json()
})
.then ( jsonData => {
  console.log(jsonData)
})










