import React from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ filter, setFilter, input, setInput }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between w-2/3 mt-4 mb-8"
    >
      <input
        type="text"
        className="bg-radix-slate3 border border-radix-slate6 text-radix-slate12 text-xs rounded-sm outline-none focus:border-radix-blue7 placeholder-radix-slate11 px-2 py-1  w-full"
        placeholder="Search in list.."
        value={input}
        onChange={handleInput}
      />

      <div className="flex ml-4">
        <select
          onChange={handleChange}
          className=" text-xs p-1 text-radix-slate12 bg-radix-slate6 w-max rounded-md shadow-sm outline-none focus:border-radix-slate6"
          value={filter}
        >
          <option>All</option>
          <option>Completed</option>
          <option>UnCompleted</option>
        </select>
      </div>
    </form>
  );
};

export default SearchBar;
