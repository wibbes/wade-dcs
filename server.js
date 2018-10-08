'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
	server.use(express.static(__dirname + '/Automation'));  
	server.get('/', function(req, res,next) {  
		res.sendFile(__dirname + '/index.html');
	});

const io = socketIO(server);
 console.log('Server Started');
io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
  socket.on('Head1', function (data) {
    console.log("Head 1 -" + data);
    socket.emit('Head1', data);
  });
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
