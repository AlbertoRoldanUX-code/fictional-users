import React from "react";

function Modal2(props) {
  const clickHandler = function () {
    props.onClick(true);
  };

  return (
    <div>
      <div className="modal">
        <div className="h2-div">
          <h2 className="h2">Invalid input</h2>
        </div>
        <p className="margin-p">Please enter a valid age (>0).</p>
        <button onClick={clickHandler} className="right">
          Okay
        </button>
      </div>
      <div onClick={clickHandler} className="overlay"></div>
    </div>
  );
}

export default Modal2;
