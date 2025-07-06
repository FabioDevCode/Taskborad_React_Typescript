import { useState } from 'react';
import type { Column as ColumnType } from '../../types/types';
import Task from './Task';

interface ColumnProps {
    column: ColumnType;
    onAddTask: (columnId: string, title: string) => void;
}

const Column = ({ column, onAddTask }: ColumnProps) => {
    const [newTaskTitle, setNewTaskTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTaskTitle.trim()) return;
        onAddTask(column.id, newTaskTitle.trim());
        setNewTaskTitle('');
    };

    return (
        <div style={{ width: '300px', padding: '1rem', background: '#f4f4f4', borderRadius: '6px' }}>
        <h2>{column.title}</h2>

        <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
            <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Nouvelle tâche"
            style={{ width: '100%', padding: '0.5rem' }}
            />
        </form>

        {column.tasks.map(task => (
            <Task key={task.id} task={task} />
        ))}
        </div>
    );
};

export default Column;
