import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <form className="flex items-center justify-between w-2/3 my-4">
      <input
        type="text"
        className="bg-radix-slate3 border border-radix-slate6 text-radix-slate12 text-xs rounded-sm outline-none focus:border-radix-blue7 placeholder-radix-slate11 px-2 py-1  w-full"
        placeholder="Search in list.."
      />

      <div className="flex ml-4">
        <button className="mr-1">
          <AiOutlineSearch />
        </button>
        <select className=" text-xs p-1 text-radix-slate12 bg-radix-slate6 w-10 rounded-md shadow-sm outline-none appearance-none focus:border-radix-slate6">
          <option>All</option>
          <option>Completed</option>
          <option>UnCompleted</option>
        </select>
      </div>
    </form>
  );
};

export default SearchBar;
