const express = require('express');
const http = require('http');
const { sourceMapsEnabled } = require('process');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));




io.on('connection', (socket) => {
    console.log('a user connected', socket.id);
        
    io.emit('entered', );
    });

    

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('landmark', ({x: posx, y: posy}) => {
        io.emit('landmark', {x: posx, y: posy});
    });

    socket.on('disconnect', () => {
        console.log('user disconnected', socket.id);
        
          io.emit('exited', );
     
    });


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
