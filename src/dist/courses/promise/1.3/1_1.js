const executor = function (resolve, reject) {
  document.body.append("immediately")
}

const promise = new Promise( executor )







