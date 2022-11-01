import React from "react";
import ListContainer from "./ListContainer";
import Addbar from "./AddBar";
import SearchBar from "./SearchBar";

const Container = () => {
  return (
    <div className="flex flex-col border border-radix-slate6 w-4/6 mt-4 items-center">
      <Addbar />
      <ListContainer />
      <SearchBar />
    </div>
  );
};

export default Container;
