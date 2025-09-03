import React from 'react';
import { Task } from '../types';

interface TaskCardProps {
  task: Task;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, setTasks }) => {
  const handleDelete = () => {
    setTasks(prev => prev.filter(t => t.id !== task.id));
  };

  const handleMove = (direction: 'left' | 'right') => {
    setTasks(prev => prev.map(t =>
      t.id === task.id
        ? {
            ...t,
            status:
              direction === 'left'
                ? t.status === 'inprogress' ? 'todo' : 'inprogress'
                : t.status === 'todo' ? 'inprogress' : 'done',
          }
        : t
    ));
  };

  return (
    <div
      draggable
      onDragStart={e => e.dataTransfer.setData('text/plain', task.id)}
      style={{
        background: '#f9fafb',
        border: '1px solid #e0e0e0',
        borderRadius: 6,
        padding: 10,
        marginBottom: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'grab',
      }}
    >
      <span>{task.title}</span>
      <div style={{ display: 'flex', gap: 4 }}>
        {task.status !== 'todo' && (
          <button onClick={() => handleMove('left')} title="Move Left">◀</button>
        )}
        {task.status !== 'done' && (
          <button onClick={() => handleMove('right')} title="Move Right">▶</button>
        )}
        <button onClick={handleDelete} title="Delete">🗑️</button>
      </div>
    </div>
  );
};

export default TaskCard;
