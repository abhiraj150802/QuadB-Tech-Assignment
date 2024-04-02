import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTask } from '../state/actions';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <div className="task-input-card">
      <form onSubmit={handleSubmit} className="task-input-form">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={handleChange}
          className="task-input"
        />
        <button type="submit" className="add-button">Add Task</button>
      </form>
    </div>
  );
};

export default TaskInput;
