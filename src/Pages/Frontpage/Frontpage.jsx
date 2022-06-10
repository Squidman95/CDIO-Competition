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
      <h1>Den store CDIO 2022 hjemmeside</h1>

      <div className="Frontpage-resultscontainer">
        <ShowResults groups={groups} />
      </div>
    </div>
  );
};

export default FrontPage;
