import React from "react";
import { useState } from "react";

const AddBar = ({ setTodos, todos = [""] }) => {
  const [input, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const getId = (arr) => {
    if (arr.length == 0) {
      return 0;
    }
    return arr.length;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevState) => {
      return [
        ...prevState,
        { id: getId(prevState), text: input, completed: false },
      ];
    });
    setInputText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="bg-radix-slate3 border border-radix-slate6 text-radix-slate12 text-bg rounded-md outline-none focus:border-radix-blue7 placeholder-radix-slate11 px-2 py-1 mt-4"
        placeholder="Enter your todo"
        onChange={handleChange}
        value={input}
      />
      <button
        type="submit"
        className="border rounded-sm border-radix-blue7 text-sm ml-2 bg-radix-blue9 px-2 py-0.5 outline-none"
      >
        ADD
      </button>
    </form>
  );
};

export default AddBar;
