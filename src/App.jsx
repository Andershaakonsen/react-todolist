import React from "react";
import Container from "./components/Container";

const App = () => {
  return (
    <div className="mt-5 flex flex-col items-center justify-center ">
      <h1 className="text-radix-blue12 text-2xl">Todo List</h1>
      <Container />
    </div>
  );
};

export default App;
