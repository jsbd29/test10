/** @format */
import React, { useEffect, useState, useRef } from "react";
import "./css/Todo.css";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    const inputValue = inputRef.current.value.trim();
    if (inputValue === "") return; // Don't add empty tasks

    setTodos([...todos, { id: Date.now(), text: inputValue, display: "" }]);
    inputRef.current.value = "";
  };

  // Toggle between completed and not completed
  const toggle = (id) => {
    const updatedTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, display: item.display === "" ? "completed" : "" };
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  // Delete an item
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className='todo'>
      <div className='todo-header'>To-Do List</div>
      <div className='todo-add'>
        <input
          ref={inputRef}
          type='text'
          placeholder='Add your task'
          className='todo-input'
        />
        <div onClick={add} className='todo-add-btn'>
          ADD
        </div>
      </div>
      <div className='todo-list'>
        {todos.map((item) => (
          <TodoItems
            key={item.id}
            id={item.id}
            display={item.display}
            text={item.text}
            toggle={toggle}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
