var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(process.env.PORT || 3000);
console.log('Server launching...');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

users = [];
connections = [];

io.sockets.on('connection', (socket) => {
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);

    socket.on('disconnect', (data) => {
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnect');
    });

    socket.on('send message', (data) => {
        io.sockets.emit('new message', {name: data.name, msg: data.message});
    });


})