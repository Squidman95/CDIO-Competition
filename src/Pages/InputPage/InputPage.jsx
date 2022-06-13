import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  callBackend,
  sendMessage,
  submitSolution,
  removeSolution,
  submissionExists,
} from "../../Services/SocketServices.js";
import Inputbox from "../../Components/Inputbox/Inputbox";
import Button from "../../Components/Button/Button";
import "./InputPage.scss";
import ShowResults from "../../Components/ShowResults/ShowResults";

const InputPage = (props) => {
  let { groups = [] } = props;
  let { groupid: groupID } = useParams();
  const [solitaireID, setSolitaireID] = useState(1);

  function submitSolitaire(solitaireID) {
    console.log(`Solution ID: ` + solitaireID);

    if (submissionExists(groups, groupID, solitaireID)) {
      alert("That solution already exists for your group: " + groupID);
    }

    if (Number.isInteger(solitaireID)) {
      console.log(
        `Input is integer: ${solitaireID} and groupID is valid: ${groupID}`
      );
      submitSolution(groupID, solitaireID);
    } else {
      alert("The input must be an integer");
    }
  }

  // function submissionExists(groups, groupID, solitaireID) {
  //   let group = groups.filter((g) => {
  //     return g.groupid == groupID;
  //   })[0];

  //   let existingSolution = group.solves.filter((s) => {
  //     return s.solitaireid == solitaireID;
  //   })[0];

  //   if (existingSolution === undefined) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  function regretSubmit(solitaireID) {
    console.log(`Solution ID: ` + solitaireID);
    if (!submissionExists(groups, groupID, solitaireID)) {
      alert("No solution exists with that id for group: " + groupID);
    }

    if (Number.isInteger(solitaireID)) {
      console.log(
        `Input is integer: ${solitaireID} and groupID is valid: ${groupID}`
      );
      removeSolution(groupID, solitaireID);
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
                submitSolitaire(solitaireID);
              }}
              imageSrc="/assets/images/icons/bird-icon.png"
              imageClass="default-img-loc"
              btnText="Submit!"
            />
          </div>

          <div className="InnerButtonContainer">
            <Button
              onClick={() => {
                regretSubmit(solitaireID);
              }}
              imageSrc="/assets/images/icons/x-icon.png"
              imageClass="default-img-loc"
              btnText="Remove!"
            />
          </div>
        </div>
      </div>
      <div className="Inputpage-resultscontainer">
        <ShowResults groups={groups} />
      </div>
    </div>
  );
};

export default InputPage;
