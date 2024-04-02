const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        const newTask = {
          id: Math.random(),
          text: action.payload.text,
          completed: false,
        };
        const updatedTasks = [...state.tasks, newTask];
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        return {
          ...state,
          tasks: updatedTasks,
        };
      case 'DELETE_TASK':
        const filteredTasks = state.tasks.filter((task) => task.id !== action.payload.id);
        localStorage.setItem('tasks', JSON.stringify(filteredTasks));
        return {
          ...state,
          tasks: filteredTasks,
        };
      case 'TOGGLE_TASK':
        const toggledTasks = state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, completed: !task.completed } : task
        );
        localStorage.setItem('tasks', JSON.stringify(toggledTasks));
        return {
          ...state,
          tasks: toggledTasks,
        };
      case 'LOAD_TASKS':
        return {
          ...state,
          tasks: action.payload.tasks,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  
    