/** @format */
import React from "react";
import "./css/TodoItems.css";
import { Check, X } from "lucide-react";

const TodoItems = ({ id, display, text, toggle, deleteTodo }) => {
  return (
    <div className='todoitems'>
      <div className='todoitems-container' onClick={() => toggle(id)}>
        <Check
          className='todo-check-icon'
          size={34}
          strokeWidth={3}
          color={display === "completed" ? "#1af579" : "#6b7280"}
        />
        <div className={`todoitem-text ${display}`}>{text}</div>
      </div>
      <X
        size={34}
        color={"tomato"}
        className='todoitems-cross-icon'
        onClick={() => deleteTodo(id)}
        strokeWidth={3}
      />
    </div>
  );
};

export default TodoItems;
