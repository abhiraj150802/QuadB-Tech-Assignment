import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask,toggleTask } from '../state/actions';




const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      dispatch({ type: 'LOAD_TASKS', payload: { tasks: storedTasks } });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <div className="task-list-card">
      <ul className="task-list">
      <h2>List</h2>
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
              className="task-checkbox"
            />
            <span className={task.completed ? 'task-text completed' : 'task-text'}>
              {task.text}
            </span>
            <button onClick={() => handleDelete(task.id)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
