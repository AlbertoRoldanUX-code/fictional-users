import React from "react";
import ListItem from "./ListItem";
import Card from "./Card";

function List(props) {
  return (
    <Card>
      {props.users.map((user) => (
        <ListItem name={user.name} age={user.age} key={user.id} />
      ))}
    </Card>
  );
}

export default List;
