
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, moveTaskDown, moveTaskUp, toggleTaskCompletion } from './Redux/taskActions';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';
import './Components/To-Do-List.css';

function ToDoList() {
  const tasks = useSelector(state => state.tasks);
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

  const handleAddTask = (task) => {
    dispatch(addTask(task));
  };
  const handleToggleCompletion = (index) => {
    dispatch(toggleTaskCompletion(index));
  };
  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };
  const handleMoveUp = (index) => {
    if (index === 0) return;
    dispatch(moveTaskUp(index));
  };
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
