'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

server.get('/api/users', function(req, res) {
  var user_id = req.param('id');
  var token = req.param('token');
  var geo = req.param('geo');  

  res.send(user_id + ' ' + token + ' ' + geo);
});
  
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
  socket.on('Machine', function(data){ 
	console.log('Client disconnected')
	socket.emit('Machine',data);
	socket.broadcast.emit('Machine',data);
});
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);