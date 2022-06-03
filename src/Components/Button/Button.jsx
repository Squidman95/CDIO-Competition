import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

const Button = (props) => {
  let {
    to = null,
    onClick = null,
    imageSrc = null,
    imageClass = null,
    btnText = null,
  } = props;

  function buttonLayout(){
    return (
      <div className="custom-button-content">
        {imageSrc &&
          <img
            src={`${process.env.PUBLIC_URL}${imageSrc}`}
            className={imageClass}
            alt='button icon'
          />
        }
        <div className={`Button-text${imageSrc ? `` : `-solo`}`}>{btnText}</div>
      </div>
    );
  }

  return (
    <div className="custom-button">
      {to !== null ? (
        <Link
          className="c-button"
          role="button"
          to={to}
          onClick={(event) => {
            onClick && onClick(event);
          }}
        >
          {buttonLayout()}
        </Link>
      ) : (
        <div
          className="c-button"
          onClick={(event) => {
            onClick && onClick(event);
          }}
        >
          {buttonLayout()}
        </div>
      )}
    </div>
  );
};

export default Button;
