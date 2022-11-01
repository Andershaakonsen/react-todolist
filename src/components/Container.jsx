import React from "react";
import ListContainer from "./ListContainer";
import Addbar from "./AddBar";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useMemo } from "react";

const Container = () => {
  const [todos, setTodos] = useState([
    { id: 0, text: "Learn React", completed: false },
    { id: 1, text: "Experiment with tailwind", completed: false },
    { id: 2, text: "Deplay App", completed: false },
  ]);
  const [filter, setFilter] = useState("All");
  const [input, setInput] = useState("");

  //Runs calculations with filter and todos, does not run the calculations unless todos and filter has changed
  const filteredTodos = useMemo(
    () =>
      filter === "All"
        ? todos
        : filter === "Completed"
        ? todos.filter((el) => el.completed)
        : todos.filter((el) => !el.completed),
    [todos, filter]
  );

  const searchedTodos =
    input === ""
      ? filteredTodos
      : filteredTodos.filter((el) =>
          //Return element where the elements text includes the text from input
          el.text.toLowerCase().includes(input.toLowerCase())
        );
  /*
 rounded corners 
*/

  return (
    <div className="flex flex-col border rounded-lg border-radix-slate6 w-4/6 mt-4 items-center">
      <Addbar setTodos={setTodos} todos={todos} />
      <ListContainer setTodos={setTodos} todos={searchedTodos} />
      <SearchBar
        setFilter={setFilter}
        setInput={setInput}
        input={input}
        filter={filter}
      />
    </div>
  );
};

export default Container;
