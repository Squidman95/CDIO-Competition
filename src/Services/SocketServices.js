import socketIOClient from 'socket.io-client';
const BASEURL = process.env.NODE_ENV=== "development" ? "http://localhost:5000" : ""
const BASEAPI = BASEURL + "/api"
let socket;


// createBackendConnection
const callBackend = async (setBackend, setChat)=>{
    const res = await fetch(BASEAPI);
    const text = await res.text();
    setBackend(text);
    socket = socketIOClient(BASEURL);
    console.log(socket)
    socket.on("chat",(remoteChat)=>{
        setChat(remoteChat);
    })
    socket.on("state",(state)=>{
        // setChat(state);
        console.log(state);
    })
}

const sendMessage = (message, setMessage)=>{
    socket.emit('msg',message);
    setMessage("");
}

const submitSolution = (groupid, solitaireid)=>{
    socket.emit('submit', {groupid, solitaireid});
    console.log(`Emit submission of solution ${solitaireid} for group ${groupid}`);
}

const removeSolution = (groupid, solitaireid)=>{
    socket.emit('remove',{groupid, solitaireid});
    console.log(`Emit removal of solution ${solitaireid} for group ${groupid}`);
}

export {callBackend, sendMessage, submitSolution, removeSolution}