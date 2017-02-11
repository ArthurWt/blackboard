Promise.reject("error")
.then(x => {
  document.body.append(1)
}, x => {
  document.body.append(x)
  return ' because...'
})
.then( y => {
  document.body.append(y)
})










