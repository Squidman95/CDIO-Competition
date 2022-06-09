import React, { useEffect, useState } from "react";
import "./Frontpage.scss";
import logo from "../../logo.svg";
import Button from "../../Components/Button/Button";
import Card from "../../Components/Card/Card";
import ShowResults from "../../Components/ShowResults/ShowResults";

const Frontpage = (props) => {
  let { groups = [] } = props;
  return (
    <div className="Frontpage-Content">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Den store CDIO - hjemmeside - Tester Hooks</p>
      <div className="Frontpage-resultscontainer">
        <ShowResults groups={groups} />
        {/* <div className="ShowResults-Cards">
          {groups.map((group, index) => {
            return (
              <Card
                groupID={group.groupid}
                imageSrc="/assets/images/icons/cat-icon.png"
                header={`Group ${group.groupid}`}
                subtext={group.solves.length}
              />
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default Frontpage;
