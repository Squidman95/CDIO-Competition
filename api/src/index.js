import express from 'express';
import cors from 'cors';
import {Server} from 'socket.io';
import {createServer} from 'http';
// import submitSolve from './SolutionServices.js';
import { submitSolve, removeSolve, getGroupSolves, getAllSolves } from './SolutionServices.js';

console.log("Starting server - mode: " + process.env.NODE_ENV);

let chat="";
let state;

const app = express();
const PORT = 5000;
app.use(cors());

app.get("/api",(req,res)=>{
    res.send("API date is " + new Date())
})

const socketServer = createServer(app);
const sockIo = new Server(socketServer,{
    cors:"*"
});

sockIo.on('connection',(socket)=>{
    console.log("User connected! :");
    socket.emit("chat", chat);
    state = getAllSolves();
    socket.emit("state", state);
    console.log(state);

    socket.on('msg', (message)=>{
        chat+="\r\n" + socket.id + ": " + message;
        console.log("chatState: " + chat);
        sockIo.emit("chat", chat);
    })
    socket.on('submit', ({groupid, solitaireid}) => {
        console.log("Submission: " + obj);
        state = submitSolve(groupid, solitaireid)
        sockIo.emit("state", state)
    })
    socket.on('remove', ({groupid, solitaireid}) => {
        console.log("Removing: " + obj);
        state = removeSolve(groupid, solitaireid)
        sockIo.emit("state", state)
    })
    
    socket.on('disconnect',()=>{
        console.log("User disconnected!");
    })
});

// For invalid routes
app.get('*', (req, res) => {
    res.status(404).send('404! This is an invalid URL.');
});

app.use(express.static('src/public'));

socketServer.listen(PORT, ()=>{
    console.log("Server running on: " + PORT);
});


