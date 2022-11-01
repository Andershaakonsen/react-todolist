import React from "react";
import ListItem from "./ListItem";

const ListContainer = () => {
  const todos = [
    {
      id: "1",
      text: "Clean Room",
      completed: "false",
    },
    {
      id: "2",
      text: "Work out",
      completed: "false",
    },
  ];
  return (
    <div className="mt-4 border border-radix-slate6 w-4/6">
      <ul>
        {todos.map((todo) => (
          <ListItem key={todo.id} text={todo.text} completed={todo.completed} />
        ))}
      </ul>
    </div>
  );
};

export default ListContainer;
