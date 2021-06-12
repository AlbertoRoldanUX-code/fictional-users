import React from "react";

const Backdrop = function () {};

function Modal(props) {
  const clickHandler = function () {
    props.onClick(true);
  };

  return (
    <React.Fragment>
      <div className="modal">
        <div className="h2-div">
          <h2 className="h2">Invalid input</h2>
        </div>
        <p className="margin-p">
          Please enter a valid name and age (non-empty values).
        </p>
        <button onClick={clickHandler} className="right">
          Okay
        </button>
      </div>
      <div onClick={clickHandler} className="overlay"></div>
    </React.Fragment>
  );
}

export default Modal;
