import React from "react";
import ListItem from "./ListItem";

const ListContainer = ({ todos, setTodos }) => {
  return (
    <div className="mt-4 w-4/6">
      <ul>
        {todos.length > 0
          ? todos.map((todo) => (
              <ListItem
                key={todo.id}
                setTodos={setTodos}
                text={todo.text}
                completed={todo.completed}
                id={todo.id}
              />
            ))
          : ""}
      </ul>
    </div>
  );
};

export default ListContainer;
