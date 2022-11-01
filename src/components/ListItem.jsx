import React from "react";
import { MdDelete } from "react-icons/md";
import { IoMdCheckbox } from "react-icons/io";

const ListItem = ({ text, completed }) => {
  return (
    <li className="p-1">
      <div className="flex justify-between items-center">
        <p className="text-md text-radix-slate11">{text}</p>
        <div className="flex items-center">
          <IoMdCheckbox className="text-xl text-radix-green7" />
          <MdDelete className=" text-xl text-radix-red7" />
        </div>
      </div>
    </li>
  );
};

export default ListItem;
