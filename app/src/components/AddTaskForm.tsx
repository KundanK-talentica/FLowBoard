import React, { useState } from 'react';
import { Task } from '../types';

interface AddTaskFormProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ setTasks }) => {
  const [title, setTitle] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    setTasks(prev => [
      ...prev,
      { id: Date.now().toString(), title: title.trim(), status: 'todo' }
    ]);
    setTitle('');
  };

  return (
    <form onSubmit={handleAdd} style={{ marginBottom: 12, display: 'flex', gap: 8 }}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Add new task..."
        style={{ flex: 1, padding: 6 }}
      />
      <button type="submit" style={{ padding: '6px 12px' }}>Add</button>
    </form>
  );
};

export default AddTaskForm;
