import React, { useEffect, useState } from "react";
import "./Frontpage.scss";
import logo from "../../logo.svg";

const Frontpage = (props) => {
  return (
    <div className="Frontpage-Content">
      <div className="Frontpage-resultscontainer">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Den store CDIO - hjemmeside - Tester Hooks</p>
      </div>
    </div>
  );
};

export default Frontpage;
