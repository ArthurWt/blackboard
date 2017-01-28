// Promise.resolve

Promise.reject("123")
.then( x => {
  document.body.append("then")
})
.catch( ex => {
  document.body.append(ex)
})
.catch( ex => {
  document.body.append(ex)
})


