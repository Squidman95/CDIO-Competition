import socketIOClient from 'socket.io-client';
const BASEURL = process.env.NODE_ENV=== "development" ? "http://localhost:5000" : ""
const BASEAPI = BASEURL + "/api"
let socket;


// createBackendConnection
const callBackend = async (setBackend, setChat, setSolutionData)=>{
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
        setSolutionData(state);
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

// Util function:
const submissionExists = (groups, groupID, solitaireID)=>{
    let group = groups.filter((g) => {
      return g.groupid == groupID;
    })[0];

    let existingSolution = group.solves.filter((s) => {
      return s.solitaireid == solitaireID;
    })[0];

    if (existingSolution === undefined) {
      return false;
    } else {
      return true;
    }
  }


export {callBackend, sendMessage, submitSolution, removeSolution, submissionExists}