'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use((req, res) =>{ res.sendFile(INDEX) })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));


  
const io = socketIO(server);

io.on('connection', (socket) => {
	
  
 // console.log('Client connected');
  
  //socket.on('disconnect', () => console.log('Client disconnected'));
  socket.on('PLC-Data', function(data){ 
	console.log(data);
	socket.broadcast.emit('PLC-Data',data);
	socket.emit('PLC-Data',data);
});
socket.on('PLC-Start', function(data){ 
	console.log(data);
	socket.broadcast.emit('PLC-Start',data);
	
});
socket.on('PLC-Stop', function(data){ 
	console.log(data);
	socket.broadcast.emit('PLC-Stop',data);
	
});
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);