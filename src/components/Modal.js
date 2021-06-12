import React from "react";
import ReactDOM from "react-dom";

const Backdrop = function (props) {
  const clickHandler = function () {
    props.onClick(true);
  };
  return <div onClick={clickHandler} className="overlay"></div>;
};

const ModalOverlay = function (props) {
  const clickHandler = function () {
    props.onClick(true);
  };
  return (
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
  );
};

function Modal(props) {
  const clickHandler = function () {
    props.onClick(true);
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={clickHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClick={clickHandler} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}

export default Modal;
