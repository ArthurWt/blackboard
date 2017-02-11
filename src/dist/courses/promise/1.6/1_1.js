
// Then.... Promise ... Then
// 化简版

async function getToken() {
  
  const response = await fetch("https://ketang.zhufengpeixun.cn/token")
  const json = await response.json()
  console.log(json)
}

getToken()








