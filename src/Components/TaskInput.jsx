 
import React, { useState,useEffect } from 'react';
import './To-Do-List.css';

function TaskInput({ onAddTask }) {
  const [newTask, setNewTask] = useState("");
  useEffect(() => {
    console.log("TaskInput mounted!");

  }, []);

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function handleAddTask() {
    if (newTask.trim() !== "") {
      onAddTask(newTask);
      setNewTask("");
    }
  }

  return (
    <div className='input-area'>
      <input type="text" placeholder="Enter a Task :)" value={newTask} onChange={handleInputChange} />
      <button className="add-btn" onClick={handleAddTask}>ADD</button>
    </div>
  );
}

export default TaskInput;
