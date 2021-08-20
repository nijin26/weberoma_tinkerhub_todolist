import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const createTodo = (e) => {
    e.preventDefault();
    const newTodo = { id: new Date().getTime(), title: input };
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteHandler = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Weboroma Todo List Manager</h1>

        <form onSubmit={createTodo}>
          <input type="text" placeholder="Enter you todo" onChange={(e) => setInput(e.target.value)} />
          <button type="submit"> Add </button>
        </form>
        <ul className="list">
          {todos.map((todo) => (
            <li key={todo.id}>
              {" "}
              {todo.title} <span onClick={() => deleteHandler(todo.id)}> X </span>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
