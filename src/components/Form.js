import React from "react";

function Form() {
  return (
    <form className="form">
      <div>
        <label className="label">Username</label>
        <input className="input"></input>
      </div>
      <div>
        <label className="label">Age (Years)</label>
        <input className="input"></input>
      </div>
      <button type="submit">Add User</button>
    </form>
  );
}

export default Form;
