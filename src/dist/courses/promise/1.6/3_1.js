async function f() {
  const data = await new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve("hi!")  
    }, 1000)
  })
  alert(data)
}

f()




