import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { submitSolve, removeSolve } from "../../Services/DBServices";
import Inputbox from "../../Components/Inputbox/Inputbox";
import Button from "../../Components/Button/Button";
import "./Inputpage.scss";

const Inputpage = (props) => {
  // let solitaireID = 1; // tmp value
  let { groupid: groupID } = useParams();
  const [solitaireID, setSolitaireID] = useState(1);

  function submitSolitaire(solitaireID) {
    if (Number.isInteger(solitaireID)) {
      submitSolve(groupID, solitaireID);
    } else {
      alert("The input must be an integer");
    }
  }

  function regretSubmit(solitaireID) {
    if (Number.isInteger(solitaireID)) {
      removeSolve(groupID, solitaireID);
    } else {
      alert("The input must be an integer");
    }
  }

  return (
    <div className="InputpageContainer">
      <div className="InputContainer">
        <Inputbox setSolitaireID={setSolitaireID} title={`Group ${groupID}`} />
        <div className="ButtonsContainer">
          <div className="InnerButtonContainer">
            <Button
              onClick={() => {
                submitSolve(solitaireID);
              }}
              imageSrc="/assets/images/icons/bird-icon.png"
              imageClass="default-img-loc"
              btnText="Submit!"
            />
          </div>

          <div className="InnerButtonContainer">
            <Button
              onClick={() => {
                submitSolitaire(solitaireID);
              }}
              imageSrc="/assets/images/icons/x-icon.png"
              imageClass="default-img-loc"
              btnText="Remove!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inputpage;
