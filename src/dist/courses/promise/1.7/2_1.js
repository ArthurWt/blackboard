// 解决回调地狱的问题


// 珠峰课堂 github.com/zhufengketang/app
// 中有一个需求就是从服务端获取token然后获取课程列表

async function getToken(){
  const response = await fetch('https://ketang.zhufengpeixun.cn/token')
  return await response.json()
}


async function getCourse(){
  const response = await fetch('https://ketang.zhufengpeixun.cn/course')
  return await response.json()
}

async function getTokenThenCourse() {
  await getToken()
  await getCourse()
}







