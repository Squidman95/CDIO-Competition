import logo from './logo.svg';
import './App.scss';
import React, {useEffect, useState} from 'react'
import Frontpage from './Pages/Frontpage/Frontpage.jsx';
import Inputpage from './Pages/Inputpage/Inputpage.jsx';

function App(props) {
  
  const [userID, setUserID] = useState(null);

  return (
    <div className="App">
      <div className='App-content-container'>
          {props.page === "Inputpage" ? <Inputpage userID={userID}/> : null}
          {props.page === "Frontpage" ? <Frontpage userID={userID}/> : null}
      </div>
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
