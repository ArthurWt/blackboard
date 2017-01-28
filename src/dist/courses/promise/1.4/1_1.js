// 两个Promise都完成

const p1 = new Promise( (resolve, reject) => {
  setTimeout( function() {
    resolve("p1 success ")  
  }, 1000)
})

const p2 = new Promise( (resolve, reject) => {
  setTimeout( function() {
    resolve("p2 success")
  }, 1500)
})

const p3 = Promise.all([p1, p2])
p3.then( ([p1Result, p2Result]) => {
  document.body.append(p1Result)
  document.body.append(p2Result)
})



