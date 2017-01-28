function executor(resolve, reject) {
  throw "error" 
}

const promise = new Promise( executor )
promise.catch( ex => {
  document.body.append(ex)  
})


