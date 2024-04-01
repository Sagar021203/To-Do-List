// Define the initial state with an empty tasks array
const initialState = {
    tasks: []
};
// Define the taskReducer function with the initial state and an action parameter
const taskReducer = (state = initialState, action) => {
     // Switch statement to handle different action types
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, { text: action.payload, completed: false }]
            };
        case 'TOGGLE_TASK_COMPLETION':
            return {
                ...state,
                 // Map through tasks and toggle completion status of the specified task
                tasks: state.tasks.map((task, index) =>
                    index === action.payload ? { ...task, completed: !task.completed } : task
                )
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter((_, index) => index !== action.payload)
            };
        case 'MOVE_TASK_UP':
            if (action.payload === 0) return state; // Task already at the top
            const tasksCopy = [...state.tasks];
            const tempTask = tasksCopy[action.payload];
            tasksCopy[action.payload] = tasksCopy[action.payload - 1];
            tasksCopy[action.payload - 1] = tempTask;
            return {
                ...state,
                tasks: tasksCopy
            };
        case 'MOVE_TASK_DOWN':
            if (action.payload === state.tasks.length - 1) return state; // Task already at the bottom
            const tasksCopyDown = [...state.tasks]; // Rename tasksCopy to tasksCopyDown
            const tempTaskDown = tasksCopyDown[action.payload];
            tasksCopyDown[action.payload] = tasksCopyDown[action.payload + 1];
            tasksCopyDown[action.payload + 1] = tempTaskDown;
            return {
                ...state,
                tasks: tasksCopyDown
            };
        case 'SET_TASKS':
                return {
                    ...state,
                    tasks: action.payload
                };
        default:
            return state;
    }
};

export default taskReducer;
