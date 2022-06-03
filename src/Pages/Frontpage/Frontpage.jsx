import React, { useEffect, useState } from "react";
import "./Frontpage.scss";

const Frontpage = (props) => {
  return (
    <div className="Frontpage-Content">
      <div className="Frontpage-resultscontainer">
        <h2 className={`Frontpage-resultscontainer-searchresultHeader`}>
          Search result:
        </h2>
      </div>
    </div>
  );
};

export default Frontpage;
