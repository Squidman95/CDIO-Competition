import React from "react";
import Card from "../../Components/Card/Card";
import "./GroupPage.scss";

const GroupPage = (props) => {
  let { groups = [] } = props;

  return (
    <div className="ShowGroup-Cards">
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

export default GroupPage;
