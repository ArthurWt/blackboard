function request(content){
  setTimeout( () => {
    document.body.append(content)
  }, Math.floor( Math.random() * 1000 ) )
}
             
             
request("hello")
request("world")
  
/// TODO
// 如何在两次request完成后执行代码
document.body.append('finished')




