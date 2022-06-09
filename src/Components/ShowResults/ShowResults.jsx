import React from "react";
import Card from "../Card/Card";
import "./ShowResults.scss";

const SearchResult = (props) => {
  let { groups = [] } = props;
  return (
    <div className="ShowResults-Cards">
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
    </div>
  );
};

export default SearchResult;
