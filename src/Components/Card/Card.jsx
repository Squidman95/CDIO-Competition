import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = (props) => {
  let {
    groupID,
    imageSrc,
    header,
    subtext,
    imagePosition = "top", //otherwise 'left'
  } = props;

  return (
    <Link to={`/Inputpage/${groupID}`}>
      <div className={`Card Card-${imagePosition}`}>
        <div className="Card-Header">{header}</div>
        <div className="Card-subtext">{subtext}</div>
        <img
          src={`${process.env.PUBLIC_URL}${imageSrc}`} // {`http://localhost:4000${image}`} //
          className="card-img-css"
        />
      </div>
    </Link>
  );
};

export default Card;
