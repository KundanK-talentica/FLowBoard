import React from 'react';

export type Task = {
  id: string;
  title: string;
  status: 'todo' | 'inprogress' | 'done';
};

export type ColumnType = 'todo' | 'inprogress' | 'done';

export const COLUMN_LABELS: Record<ColumnType, string> = {
  todo: 'To Do',
  inprogress: 'In Progress',
  done: 'Done',
};
