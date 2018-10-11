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
	
	var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

		console.log(q);
	
socket.broadcast.emit('Machine',q);
socket.emit('Machine',q);
	
//console.log(q.query.get('machine'));
//console.log(q.query.get('payload'));
  
  console.log('Client connected');
  
  socket.on('disconnect', () => console.log('Client disconnected'));
  socket.on('Machine', function(data){ 
	console.log('Client disconnected')
	socket.emit('Machine',data);
	socket.broadcast.emit('Machine',data);
});
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);