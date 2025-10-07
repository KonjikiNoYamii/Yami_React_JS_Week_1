import { useState, useEffect } from "react";
import "./TodoList.css";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [filter, setFilter] = useState("All");
  const [currentTime, setCurrentTime] = useState(new Date());

  const addTodo = (e) => {
    e.preventDefault();
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
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="main">
      <div className="filterSection">
        <ul className="filterList">
          <li onClick={() => setFilter("All")}>All</li>
          <li onClick={() => setFilter("active")}>Active</li>
          <li onClick={() => setFilter("completed")}>Completed</li>
        </ul>
      </div>{" "}
      <hr />
      <div className="todoSection">
        <form onSubmit={addTodo}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type="submit">&gt;&gt;</button>
        </form>
        <div>
          {filterTodos.length === 0 ? (
            <div style={{ justifySelf: "center" }}>
              <p style={{ textAlign: "center", color: "blue" }}>
                Tidak ada tugas....
              </p>
              <img src="public/chitoge-removebg-preview.png" alt="" />
            </div>
          ) : (
            <ul>
              {filterTodos.map((todo) => (
                <li key={todo.id} className="todoItem">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={todo.completed}
                    onChange={() => todoToggle(todo.id)}
                  />{" "}
                  {todo.text}{" "}
                  <button onClick={() => deleteTodo(todo.id)}>X</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="clockSection">
        <h2>🕒 Waktu Sekarang</h2>
        <p>
          {currentTime.toLocaleString("id-ID", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
}
