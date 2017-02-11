// Then ... Then... Then...

Promise.resolve([1,2,3])
.then( data => {
  console.log(data)
  return [...data, 4]
})
.then( data => {
  console.log(data)
  return [...data, 5]
})
.then( data => {
  console.log(data)
  return [...data, 6]      
})




