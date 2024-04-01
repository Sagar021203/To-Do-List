
export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task
});
export const toggleTaskCompletion = (index) => ({
    type: 'TOGGLE_TASK_COMPLETION',
    payload: index
});
export const deleteTask = (index) => ({
    type: 'DELETE_TASK',
    payload: index
});
export const moveTaskUp = (index) => ({
    type: 'MOVE_TASK_UP',
    payload: index
});
export const moveTaskDown = (index) => ({
    type: 'MOVE_TASK_DOWN',
    payload: index
});
