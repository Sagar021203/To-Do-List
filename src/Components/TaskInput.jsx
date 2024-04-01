 
import React, { useState,useEffect } from 'react';
import './To-Do-List.css';

function TaskInput({ onAddTask }) {
 // State to store the new task input
  const [newTask, setNewTask] = useState("");
 // useEffect hook to log a message when the component mounts
  useEffect(() => {
    console.log("TaskInput mounted!");

  }, []);
// Handler function to update the newTask state when input changes
  function handleInputChange(e) {
    setNewTask(e.target.value);
  }
// Handler function to add a new task when the 'ADD' button is clicked
  function handleAddTask() {
   // Check if the new task input is not empty
    if (newTask.trim() !== "") {
      // Call the onAddTask function passed from the parent component
      // to add the new task
      onAddTask(newTask);
     // Clear the newTask state after adding the task
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
