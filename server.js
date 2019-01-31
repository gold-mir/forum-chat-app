const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const api = require('./server/routes/api');
const app = express();
const socketIO = require('socket.io');

//parse incoming JSON data
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const server = http.createServer(app);
const io = socketIO(server);

//establish socket and server
io.on('connection', (socket) => {
    console.log(`Socket ${socket.id} added.`);

    socket.on('chat message', (msg) => {
         console.log(`Message Received: ${msg}`);
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log(`Socket ${socket.id} removed.`)
    });
});

server.listen(3000, () => {
    console.log("started server");
});