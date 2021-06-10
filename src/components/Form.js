import React, { useState } from "react";
import Card from "./Card";

function Form(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const formHandler = function (e) {
    e.preventDefault();

    const userData = {
      name: enteredName,
      age: +enteredAge,
    };
    props.onSubmit(userData);

    setEnteredName("");
    setEnteredAge("");
  };

  const usernameHandler = function (e) {
    setEnteredName(e.target.value);
  };

  const ageHandler = function (e) {
    setEnteredAge(e.target.value);
  };

  return (
    <Card>
      <form onSubmit={formHandler}>
        <div>
          <label className="label">Username</label>
          <input
            className="input"
            onChange={usernameHandler}
            value={enteredName}
          ></input>
        </div>
        <div>
          <label className="label">Age (Years)</label>
          <input
            type="number"
            className="input"
            onChange={ageHandler}
            value={enteredAge}
          ></input>
        </div>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}

export default Form;
