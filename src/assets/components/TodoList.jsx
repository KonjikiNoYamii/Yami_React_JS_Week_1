import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [filter, setFilter] = useState("All");

  const addTodo = (e) => {
    e.preventDefault()
    if (inputText.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setInputText("");
  };
  const todoToggle = (id) => {
    setTodos((prev) => 
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const filterTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <div>
        <ul>
          <li onClick={() => setFilter("All")}>All</li>
          <li onClick={() => setFilter("active")}>Active</li>
          <li onClick={() => setFilter("completed")}>Completed</li>
        </ul>
      </div>
      <div>
        <form onSubmit={addTodo}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type="submit">Tambah</button>
        </form>
      </div>
      <div>
        {filterTodos.length === 0 ? (
          <p>tidak ada tugas</p>
        ) : (
          <ul>
            {filterTodos.map((todo) => (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() =>todoToggle(todo.id)}
                />{" "}
                {todo.text}{" "}
                <button
                  onClick={() => deleteTodo(todo.id)}
                >X</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
