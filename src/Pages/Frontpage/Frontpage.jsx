import React, { useEffect, useState } from "react";
import "./Frontpage.scss";
import logo from "../../logo.svg";
import Button from "../../Components/Button/Button";

const Frontpage = (props) => {
  return (
    <div className="Frontpage-Content">
      <div className="Frontpage-resultscontainer">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Den store CDIO - hjemmeside - Tester Hooks</p>
      </div>
      <div className="ButtonContainer">
        <Button
          to="/Inputpage/1"
          onClick={() => {
            console.log("Navigating to group 1 inputpage");
          }}
          imageSrc="/assets/images/icons/horse-icon.png"
          imageClass="default-img-loc"
          btnText="Input Page!"
        />
      </div>
    </div>
  );
};

export default Frontpage;
