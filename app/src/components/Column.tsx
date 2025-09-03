import React from 'react';
import { Task, ColumnType, COLUMN_LABELS } from '../types';
import TaskCard from './TaskCard';
import AddTaskForm from './AddTaskForm';

interface ColumnProps {
  type: ColumnType;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  allTasks: Task[];
}

const Column: React.FC<ColumnProps> = ({ type, tasks, setTasks, allTasks }) => {
  return (
    <div
      style={{
        flex: 1,
        margin: '0 8px',
        background: '#fff',
        borderRadius: 8,
        boxShadow: '0 2px 8px #e0e0e0',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
      }}
      onDragOver={e => e.preventDefault()}
      onDrop={e => {
        const id = e.dataTransfer.getData('text/plain');
        setTasks(prev => prev.map(task =>
          task.id === id ? { ...task, status: type } : task
        ));
      }}
    >
      <h2 style={{ textAlign: 'center' }}>{COLUMN_LABELS[type]}</h2>
      {type === 'todo' && <AddTaskForm setTasks={setTasks} />}
      <div style={{ flex: 1, minHeight: 40 }}>
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} setTasks={setTasks} />
        ))}
      </div>
    </div>
  );
};

export default Column;
