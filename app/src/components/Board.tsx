import React from 'react';
import Column from './Column';
import { Task, ColumnType } from '../types';

interface BoardProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const columns: ColumnType[] = ['todo', 'inprogress', 'done'];

const Board: React.FC<BoardProps> = ({ tasks, setTasks }) => {
  return (
    <div style={{ display: 'flex', width: '100%', height: '80vh' }}>
      {columns.map((col) => (
        <Column
          key={col}
          type={col}
          tasks={tasks.filter((t) => t.status === col)}
          setTasks={setTasks}
          allTasks={tasks}
        />
      ))}
    </div>
  );
};

export default Board;
