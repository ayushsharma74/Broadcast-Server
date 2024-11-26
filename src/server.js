import express from "express"
import http from "http"
import { Server } from "socket.io"
import { cyan } from 'console-log-colors'

const server = http.createServer();
const io = new Server(server);

const PORT = 3000
let connectedClients = [];

io.on("connection", (socket) => {
    console.log(`Client connected: ${socket.id}`);
    connectedClients.push(socket.id);

    socket.on("message" , (message) => {
        console.log(`Message from ${socket.id}: ${message}`);
    })
    
});

server.listen(PORT , () => {
    console.log(cyan.bgGreenBright.bold.underline(` Broadcasting Server Running At Port : ${PORT} `));
})

