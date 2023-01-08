import { useState } from "react";
import Task from "./cmp/Task";
import "./css/main.css";
import data from "./data/data";
import AddTask from "./cmp/AddTask";

export default function App() {
  const [task, setTask] = useState(data);

  const [toggle, setToggle] = useState(false);

  try {
    fetch("http://localhost:5000/api/v1/")
      .then((response) => response.json())
      .then((jsonData) => {
        setTask((task) => (task = jsonData));
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    setTask((task) => {
      task = data;
    });
  }

  return (
    <div className="container">
      <div className="heading">To Do List</div>
      <div
        className="task-container"
        style={{ display: `${toggle ? "none" : "flex"} ` }}
      >
        <Task
          task={task}
          setToggle={setToggle}
        />
      </div>
      <div
        className="add-container"
        style={{ display: `${toggle ? "block" : "none"} ` }}
      >
        <AddTask
          task={task}
          setToggle={setToggle}
        />
      </div>
    </div>
  );
}
