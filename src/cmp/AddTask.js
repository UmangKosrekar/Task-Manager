import { useState } from "react";
import axios from "axios";
import "../css/add.css";

export default function AddTask({ task, setToggle }) {
  const [comment, setComment] = useState("");
  const [data, setData] = useState("");

  const inputHandler = (e) => {
    setData(e.target.value);
    setComment("");
  };

  const btnHandler = () => {
    if (data == "") {
      setComment("Above Field need to be filled");
    } else {
      setComment("");
      axios
        .post("http://localhost:5000/api/v1", { content: data })
        .then(() => console.log("Task Created"))
        .catch((err) => {
          console.error(err);
        });
      setToggle(false);
      document.getElementById("inputData").value = ""
    }
  };

  const backBtnHandler = () => {
    setToggle(false);
  };

  return (
    <div className="main-add">
      <div className="add-heading">Add Task here...</div>
      <div className="add">
        <input
          type="text"
          className="input-data"
          id="inputData"
          autoFocus
          onChange={inputHandler}
        />
        <div className="comment">{comment}</div>
        <button className="btn" onClick={(e) => btnHandler(e)}>
          Click to add
        </button>
        <button className="btn" onClick={backBtnHandler}>
          Go Back
        </button>
      </div>
    </div>
  );
}
