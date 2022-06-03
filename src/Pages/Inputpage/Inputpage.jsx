import React, { useEffect, useState } from "react";
import Inputbox from "../../Components/Inputbox/Inputbox";
import "./Inputpage.scss";

const Inputpage = (props) => {
  return (
    <div className="Inputpage-Content">
      <h2 className={`Inputpage-header`}>Search result:</h2>
      <Inputbox />
    </div>
  );
};

export default Inputpage;
