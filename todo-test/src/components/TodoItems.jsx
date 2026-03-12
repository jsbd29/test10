/** @format */

import React from "react";
import "./css/TodoItems.css";
import { Check ,X,XIcon } from "lucide-react";

const TodoItems = ({no, display,text}) => {
  return (
    <>
      <div className='todoitems'>
        <div className='todoitems-container'>
      <Check/>
          <div className="todoitem-text">{text}
          </div>
        </div>
      <X/>
      </div>
    </>
  );
};

export default TodoItems;
