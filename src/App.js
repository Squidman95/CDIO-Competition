import logo from './logo.svg';
import './App.scss';
import React, {useEffect, useState} from 'react'
import Frontpage from './Pages/Frontpage/Frontpage.jsx';
import Inputpage from './Pages/Inputpage/Inputpage.jsx';

const BASEURL = process.env.NODE_ENV=== "development" ? "http://localhost:5000/api" : "/api"

function App(props) {
  
  const [userID, setUserID] = useState(null);
  const [backend, setBackend] = useState(null);

  const callBackend = async ()=>{
    const res = await fetch(BASEURL);
    const text = await res.text();
    setBackend(text);
  }

  return (
    <div className="App">
      <div className='App-content-container'>
          {props.page === "Inputpage" ? <Inputpage userID={userID}/> : null}
          {props.page === "Frontpage" ? <Frontpage userID={userID}/> : null}
      </div>
      <button onClick={callBackend}>Test backend</button>
      {backend && <div> Backend says : {backend}
        </div>
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
