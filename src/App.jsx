
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, moveTaskDown, moveTaskUp, toggleTaskCompletion } from './Redux/taskActions';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';
import './Components/To-Do-List.css';

function ToDoList() {
  // Select tasks from the Redux store
  const tasks = useSelector(state => state.tasks);
  // Get dispatch function from Redux to dispatch actions
  const dispatch = useDispatch();

  // Load tasks from local storage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      dispatch({ type: 'SET_TASKS', payload: storedTasks });
    }
  }, []);

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Handler function to add a new task
  const handleAddTask = (task) => {
    dispatch(addTask(task));
  };
  // Handler function to toggle completion of a task
  const handleToggleCompletion = (index) => {
    dispatch(toggleTaskCompletion(index));
  };
   // Handler function to delete a task
  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };
  // Handler function to move a task up
  const handleMoveUp = (index) => {
    if (index === 0) return; // Check if task is already at the top
    dispatch(moveTaskUp(index));
  };
  // Handler function to move a task down
  const handleMoveDown = (index) => {
    if (index === tasks.length - 1) return; // Already at the bottom, cannot move further down
    dispatch(moveTaskDown(index)); // Dispatch action to move task down
  };

  return (
    <div className="to-do-list">
      <h1>TO-DO-LIST</h1>
      <TaskInput onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onToggleCompletion={handleToggleCompletion} onMoveUp={handleMoveUp} onMoveDown={handleMoveDown} />
    </div>
  );
}

export default ToDoList;
