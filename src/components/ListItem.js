import React from "react";

function ListItem(props) {
  return (
    <div className="item">
      <p className="text">{`${props.name} (${props.age} years old)`} </p>
    </div>
  );
}

export default ListItem;
