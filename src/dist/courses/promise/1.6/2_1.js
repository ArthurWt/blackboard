async function f() {
  return 1 
}

// 相当于
function f() {
  return new Promise( (resolve, reject) => {
    resolve(1)
  })
}

