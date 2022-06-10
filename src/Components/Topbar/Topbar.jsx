import React from "react";
import "./Topbar.scss";
import Button from "../../Components/Button/Button";

function Topbar(props) {
  let { setTopbarText, topbarText } = props;

  return (
    <div className="topnav Topbar">
      <div className="Topbar-left-container Topbar-container">
        <div className="TopbarButtonContainer">
          <Button
            to="/"
            onClick={() => console.log("Going to result page")}
            btnText="Home"
          />
        </div>
      </div>

      <div className="Topbar-middle-container Topbar-container">
        <h1>{topbarText}</h1>
      </div>

      <div className="Topbar-right-container Topbar-container">
        <div className="TopbarButtonContainer">
          <Button
            to="/GroupPage"
            onClick={() => console.log("Going to group page")}
            btnText="Groups"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
