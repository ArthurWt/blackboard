var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path')
var fs = require("fs")
var mkdirp = require('mkdirp');

var n = 0

var dirs = {

}
io.on('connection', function(socket){
	n ++ 
	console.log(n + " clients connected")
	socket.on("draw", function(msg) {
		var dir = path.resolve(__dirname, "dist/courses/", msg.course, msg.topic)
		if(!dirs[dir]) {
			dirs[dir] = true
			mkdirp.sync(dir)
		}
		
		var file = path.resolve(__dirname, "dist/courses/", msg.course, msg.topic, msg.id + ".log")

		console.log(file)
		delete msg.course
		delete msg.topic
		delete msg.id
		delete msg.type
		
		
		fs.appendFile(file, JSON.stringify(msg) + "\n")

	})

	socket.on("clear", function(msg) {

		try{
			var file = path.resolve(__dirname, "dist/courses/", msg.course, msg.topic, msg.id + ".log")
			fs.unlinkSync(file);	
			fs.close()
		} catch(e) {
			
		}
		
	})
	socket.on("disconnect", function() {
		n--
		console.log(n + " clients connected")
	});
});

http.listen(3006, function(){
});
