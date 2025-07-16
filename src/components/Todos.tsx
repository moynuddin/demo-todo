import { useState } from "react";
import { useStore } from "../store";
import Todo from "./Todo";
import '../App.css'

const Todos = () => {
  const { todos, addTodo } = useStore();
  const [input, setInput] = useState("");
 
  const handleClick = () => {
    console.log("added");

    addTodo(input);
    setInput("");
  };

  return (
    <div>
      <div className="container">
        <input
        className="input"
          type="text"
          placeholder="Add todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn" onClick={handleClick}>Add</button>
      </div>
      <div className="todolist">
        {!todos.length
          ? "No todos"
          : todos.map((todo) => (
              <Todo todo={todo} />
            ))}
      </div>
    </div>
  );
};

export default Todos;
