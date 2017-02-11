// 使用resolve代表fullfill(成功）
// 使用reject代表fail(失败)
// 抛一枚硬币
// 如果正面代表中奖

function flip_coin() {
  
  return new Promise( (resolve, reject) => {
    const r = Math.random() //随机数大于0.5代表正面，小于0.5代表背面

    if(r > 0.5) { 
      resolve('success')
    }else {
      reject('fail')
    }
    
  } ) 
}

flip_coin()
.then(result => {
  document.body.append(result)
})
.catch(ex => {
  document.body.append(ex)
})








