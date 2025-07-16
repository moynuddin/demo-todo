import type { TodoType } from "../store";
import { useStore } from "../store";

type Props = {
  todo: TodoType;
};

const Todo = ({ todo }: Props) => {
  const { deleteTodo, toggleTodo } = useStore();

  return (
    <div className="todo" key={todo.id}>
     <p onClick={() => toggleTodo(todo.id)} className={`${todo.isCompleted ? "completed": ""}`}>{todo.text}</p>  
     <span className="delete" onClick={() => deleteTodo(todo.id)}>X</span>
    </div>
  );
};

export default Todo;
