import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import { Task } from './types';

const LOCAL_STORAGE_KEY = 'flowboard-tasks';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  // Save tasks to localStorage on change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>FlowBoard</h1>
      <Board tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
