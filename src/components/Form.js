import React, { useRef } from "react";
import Card from "./Card";

function Form(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const formHandler = function (e) {
    e.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    const userData = {
      name: enteredUsername,
      age: +enteredUserAge,
    };
    props.onSubmit(userData);

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <Card>
      <form onSubmit={formHandler}>
        <div>
          <label htmlFor="username" className="label">
            Username
          </label>
          <input id="username" className="input" ref={nameInputRef}></input>
        </div>
        <div>
          <label htmlFor="age" className="label">
            Age (Years)
          </label>
          <input
            id="age"
            type="number"
            className="input"
            ref={ageInputRef}
          ></input>
        </div>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}

export default Form;
