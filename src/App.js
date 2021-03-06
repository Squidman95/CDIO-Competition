import logo from './logo.svg';
import './App.scss';
import React, {useEffect, useState} from 'react'
import ResultPage from './Pages/ResultPage/ResultPage.jsx';
import InputPage from './Pages/InputPage/InputPage.jsx';
import Chart from 'react-apexcharts'
import Topbar from "./Components/Topbar/Topbar";
import {callBackend, sendMessage} from "./Services/SocketServices";
import GroupPage from './Pages/GroupPage/GroupPage';


// import socketIOClient from 'socket.io-client';
// const BASEURL = process.env.NODE_ENV=== "development" ? "http://localhost:5000" : ""
// const BASEAPI = BASEURL + "/api"
// let socket; //Should be centralized to a statemanager

function App(props) {
  const [backend, setBackend] = useState(null);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState("chat");
  const [solutionData, setSolutionData] = useState([]);
  const [topbarText, setTopbarText] = useState("Den store CDIO 2022 hjemmeside!");

  // const callBackend = async ()=>{
  //   const res = await fetch(BASEAPI);
  //   const text = await res.text();
  //   setBackend(text);
  //   socket = socketIOClient(BASEURL);
  //   console.log(socket)
  //   socket.on("chat",(remoteChat)=>{
  //     setChat(remoteChat);
  //   })
  // }

  // const sendMessage = ()=>{
  //   socket.emit('msg',message);
  //   setMessage("");
  // }

  useEffect(() => {
    if(!backend) {
      createBackendConnection();
    }
  }, []);

  function createBackendConnection() {
    callBackend(setBackend, setChat, setSolutionData);
  }

// Made onClick in the following 2 ways to show both methods of calling a function. They work the same way
// <button onClick={createBackendConnection}>Test backend - make connection</button>
// <button onClick={()=>sendMessage(message, setMessage)}> send message</button>

return (
  <div className="App">
    <div className='App-topbar-container'> 
      <Topbar setTopbarText={setTopbarText} topbarText={topbarText}/>
    </div>
    <div className='App-content-container'>
        {props.page === "GroupPage" ? <GroupPage groups={solutionData}/> : null}
        {props.page === "InputPage" ? <InputPage groups={solutionData}/> : null}
        {props.page === "ResultPage" ? <ResultPage groups={solutionData}/> : null}
    </div>
    {backend && <>
      <pre>{chat} </pre>
      <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)}></input>
      <button onClick={()=>sendMessage(message, setMessage)}> send message</button>
      </>
      }

  </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
