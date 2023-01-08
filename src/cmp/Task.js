import React, { useState } from "react";
import axios from "axios";

import "../css/task.css";

const Task = ({ task, setToggle }) => {
  const checkHandler = (e) => {
    // const temp = [...task];
    // if (temp[e.target.id].condition == false) {
    //   bool = true;
    // } else {
    //   bool = false;
    // }
    let bool = true;
    const target = e.target.checked;
    if(target){
      bool = true
    }
    else{
      bool=false
    }

    axios
      .patch(`http://localhost:5000/api/v1/${e.target.id}`, {
        condition: bool,
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const btnHandler = () => {
    setToggle(true);
  };

  return (
    <>
      <div className="overflow-container">
        {task.map((here) => {
          return (
            <div className="task">
              <input
                type="checkbox"
                checked={here.condition}
                id={here.id}
                key={here.id}
                onChange={(e) => checkHandler(e)}
              />
              <div className={`${here.condition ? "text-inactive" : "text"}`}>
                {here.content}
              </div>
            </div>
          );
        })}
      </div>
      <button className="btn" onClick={btnHandler}>
        ADD
      </button>
    </>
  );
};

export default Task;
