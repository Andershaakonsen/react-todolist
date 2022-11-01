import React from "react";
import ListContainer from "./ListContainer";
import Addbar from "./AddBar";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Container = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="flex flex-col border border-radix-slate6 w-4/6 mt-4 items-center">
      <Addbar setTodos={setTodos} todos={todos} />
      <ListContainer todos={todos} />
      <SearchBar />
    </div>
  );
};

export default Container;
