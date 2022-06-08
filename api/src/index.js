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
    res.send("API date is " + new Date())
})

const socketServer = createServer(app);
const sockIo = new Server(socketServer,{
    cors:"*"
});

sockIo.on('connection',(socket)=>{
    console.log("User connected! :");
    socket.emit("chat", chat);
    socket.on('msg', (message)=>{
        chat+="\r\n" + socket.id + ": " + message;
        console.log("chatState: " + chat);
        sockIo.emit("chat", chat)

    })
    socket.on('disconnect',()=>{
        console.log("User disconnected!");
    })
});

app.get('/solutions/:groupid', (req,res) => {
    let group = dbservices.getSolutions(req.params.groupid);
    if (group === null || group === undefined) {
        res.status(404).send('Group does not exist');
    } else {
        res.status(200).send(group);
    }
});

app.put('/solutions/:groupid/:solitaireid', (req,res) => {
    let solution = dbservices.submitSolve(req.params.groupid, req.params.solitaireid);
    if (solution === null || solution === undefined) {
        res.status(404).send('Group or solution does not exist');
    } else {
        res.status(200).send(basketProduct);
    }
});


app.delete('/solutions/:groupid/:solitaireid', (req,res) => {
    let group = dbservices.removeSolve(req.params.groupid, req.params.solitaireid);
    if(group === null || group === undefined) {
        res.status(404).send('Group or solution does not exist');
    } else {
        res.status(200).send(group);
    }
});

// For invalid routes
app.get('*', (req, res) => {
    res.status(404).send('404! This is an invalid URL.');
});

app.use(express.static('src/public'));

socketServer.listen(PORT, ()=>{
    console.log("Server running on: " + PORT);
});


