import React, { useEffect, useState } from "react";
import "./FrontPage.scss";
import logo from "../../logo.svg";
import Button from "../../Components/Button/Button";
import Card from "../../Components/Card/Card";
import ShowResults from "../../Components/ShowResults/ShowResults";
// import ApexChart from "../../Components/Chart/Chart";

const FrontPage = (props) => {
  let { groups = [] } = props;

  return (
    <div className="Frontpage-Content">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <h1>Den store CDIO 2022 hjemmeside</h1>

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
        <div className="ButtonContainer">
          <Button
            to="/GroupPage"
            onClick={() => {
              console.log("Navigating to group 1 inputpage");
            }}
            imageSrc="/assets/images/icons/horse-icon.png"
            imageClass="default-img-loc"
            btnText="Group Page!"
          />
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
