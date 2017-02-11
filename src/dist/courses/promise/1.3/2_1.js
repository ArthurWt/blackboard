function executor(resolve, reject) {
  throw "Error"
}

const promise = new Promise( executor )
promise.catch( ex => {
  document.body.append(ex)  
})






