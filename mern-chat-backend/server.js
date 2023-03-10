const express = require('express');
const app = express();

const rooms = ['general', 'tech', 'finance', 'crypto'];
const cors = require('cors');

// this is being able to receive data from the front-end
app.use(express.urlencoded({extended: true}));

app.use(express.json());

// allowed front end can communicate with backend
app.use(cors());

const server = require('http').createServer(app);

const PORT = 5001;
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        method: ['GET','POST'],
    }
})

server.listen(PORT, () => {
    console.log('listening to port', PORT)
})