import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import Modal from "./Modal";

const dummyUsers = [
  {
    name: "Pablo",
    age: 23,
    id: 1,
  },
  {
    name: "Pumpa",
    age: 44,
    id: 2,
  },
];

function App() {
  const [users, setUsers] = useState(dummyUsers);

  const [isValid, setIsValid] = useState(true);

  const onSubmitHandler = function (userData) {
    userData = { id: Math.random().toString(), ...userData };

    if (userData.name === "" && userData.age === 0) {
      setIsValid(false);
      return;
    }

    setUsers((prevUsers) => {
      return [userData, ...prevUsers];
    });
  };

  const onClickHandler = function (data) {
    setIsValid(data);
  };

  return (
    <div>
      <Form onSubmit={onSubmitHandler} />
      <List users={users} />
      {!isValid && <Modal onClick={onClickHandler} />}
    </div>
  );
}

export default App;

// 1º Create a component with 2 input fields, 2 labels and a submit button. 1º Label is Username and 2º label is Age (Years), button is Add User. ✔

// 2º When adding a new user, it gets rendered on a list component below. Name + (years + years old). ✔

// 3º Display modal window when clicking on the button and both inputs are empty: Invalid input
// Please enter a valid name and age (non empty values)
// Okay button ✔

// 4º Dismiss modal window by clicking okay and by clicking on the backdrop. ✔

// 5º Display modal window that says Please enter a valid age (>0) if entered a negative age.

// 6º Reset inputs when adding a user successfully.
