
// 珠峰课堂 github.com/zhufengketang/app
// 中有一个需求就是从服务端获取token然后获取课程列表
fetch('https://ketang.zhufengpeixun.cn/token')
.then( response => {
  response.json().then( tokenJson => {
    
    const token = tokenJson
    
    fetch('https://ketang.zhufengpeixun.cn/course')
    .then( response => {
        response.json().then( courseJson => {
            console.log(courseJson)  
        })
    })
  })
  
})






