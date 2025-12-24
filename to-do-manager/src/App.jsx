import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (taskText.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      priority: priority,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskText("");
  };


  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };


  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };


  const filteredTasks = tasks.filter(task => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h3 className="text-center mb-4">Smart To-Do Manager</h3>


        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />

        <select
          className="form-select mb-2"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button className="btn btn-primary w-100" onClick={addTask}>
          Add Task
        </button>


        <select
          className="form-select mt-3"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Completed</option>
          <option>Pending</option>
        </select>


        <ul className="list-group mt-4">
          {filteredTasks.length === 0 && (
            <li className="list-group-item text-center">
              No tasks available
            </li>
          )}

          {filteredTasks.map(task => (
            <li
              key={task.id}
              className={`list-group-item d-flex justify-content-between align-items-center
                ${task.completed ? "list-group-item-success" : ""}`}
            >
              <div>
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.text}
                </span>
                <small className="d-block text-muted">
                  Priority: {task.priority}
                </small>
              </div>

              <div>
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => toggleTask(task.id)}
                >
                  ✔
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteTask(task.id)}
                >
                  ✖
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
