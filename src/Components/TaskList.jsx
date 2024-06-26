 
import React from 'react';
import './To-Do-List.css';

function TaskList({ tasks, onDeleteTask, onMoveUp, onMoveDown,onToggleCompletion }) {
 // Handler function to toggle completion of a task
  const handleToggle = (index) => {
    console.log("Toggling task at index:", index);// Log the index of the task being toggled
    onToggleCompletion(index);// Call the onToggleCompletion function passed from the parent component
  };
  return (
    <ol>
      {tasks.map((task, index) => 
        <li key={index} className={task.completed ? 'completed' : ''}>
          <span className="task-text">{task.text}</span>
          <button onClick={() => onDeleteTask(index)} className="delete-btn">Delete</button>
          <button onClick={() => onMoveUp(index)} className="move-btn">👆</button>
          <button onClick={ ()=> onMoveDown(index)} className="move-btn">👇</button>
          <button onClick={() => handleToggle(index)} className="move-btn">
            {task.completed ? 'Undo' : '✔️'}
          </button>
        </li>
      )}
    </ol>
  );
}

export default TaskList;
