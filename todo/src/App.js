



import React from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './state/reducer';
import { configureStore } from '@reduxjs/toolkit';
import { useState,useEffect } from 'react';

//create store kaam nahi kara isliye isko use kiye
const store = configureStore({
  reducer: reducer,
});

function App() {
  const [showAddTask, setShowAddTask] = useState(true);
  const [showViewTask, setShowViewTask] = useState(false);

  const toggleAddTask = () => {
    setShowAddTask(true);
    setShowViewTask(false);
  };

  const toggleViewTask = () => {
    setShowAddTask(false);
    setShowViewTask(true);
  };

  useEffect(() => {
    // jab component load hoga to add task wala component dikhega
    setShowAddTask(true);
    setShowViewTask(false);
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <div className="sidebar">
         <h1>Side Bar</h1>
          <button onClick={toggleAddTask}>Add Task</button>
          <button onClick={toggleViewTask}>View Tasks</button>
        </div>
        <div className="main">
          {showAddTask && <TaskInput />}
          {showViewTask && <TaskList />}
        </div>
      </div>
    </Provider>
  );
}

export default App;
