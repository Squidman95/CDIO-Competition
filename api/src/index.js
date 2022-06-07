import express from 'express';
import cors from 'cors';
import {Server} from 'socket.io';
import {createServer} from 'http';

console.log("Starting server - mode: " + process.env.NODE_ENV);

let chat="";

const app = express();
const PORT = 5000;
app.use(cors());

app.get("/api",(req,res)=>{
    res.send("API time is " + new Date())
})

const socketServer = createServer(app);
const sockIo = new Server(socketServer,{
    cors:"*"
});

sockIo.on('connection',(socket)=>{
    console.log("User connected! :");
    socket.on('msg', (message)=>{
        chat+="\r\n" + socket.id + ": " + message;
        console.log("chatState: " + chat);
        sockIo.emit("chat", chat)

    })
    socket.on('disconnect',()=>{
        console.log("User disconnected!");
    })
})

app.use(express.static('src/public'));

socketServer.listen(PORT, ()=>{
    console.log("Server running on: " + PORT);
});


