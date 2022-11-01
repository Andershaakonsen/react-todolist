import React from "react";
import { MdDelete } from "react-icons/md";
import { IoMdCheckbox } from "react-icons/io";

const ListItem = ({ text, id, completed, setTodos }) => {
  const handleDelete = () => {
    setTodos((prevState) => prevState.filter((el) => el.id !== id));
  };
  const handleComplete = () => {
    console.log(completed);

    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id == id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <li className="border-b border-radix-slate4 mb-2 hover:text-radix-blue7">
      <div className="flex justify-between items-center">
        {completed ? (
          <p className="text-md text-radix-slate11 line-through">{text}</p>
        ) : (
          <p className="text-md text-radix-slate11 ">{text}</p>
        )}
        <div className="flex items-center">
          <IoMdCheckbox
            onClick={handleComplete}
            className="text-xl text-radix-green9 hover:text-radix-green10"
          />
          <MdDelete
            onClick={handleDelete}
            className=" text-xl text-radix-red9 hover:text-radix-red10"
          />
        </div>
      </div>
    </li>
  );
};

export default ListItem;
