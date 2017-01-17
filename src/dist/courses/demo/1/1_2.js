function request(url) {
	return new Promise( (reosove, reject) => {
     	$.ajax(url, data => {
        	resolve(data)  
        })
    })
}

function show_loading(url) {
  return new Promise( (resolve, reject) => {
    // 弹loading层
  	// Request
  	request(url)
  		.then(data => resolve(data);//关弹层 )
  	 
  })
   
}

function async A() {
  const data = await show_loading(url)
}

A().then(data => alert(data))




















































