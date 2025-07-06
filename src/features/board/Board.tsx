import { useState } from 'react';

import type { Column as ColumnType } from '../../types/types';
import Column from './Column';

const Board = () => {
    const boardData: ColumnType[] = [
        {
            id: 'todo',
            title: 'À faire',
            tasks: [
                { id: '1', title: 'Créer composants', description: 'Board, Column, Task' },
                { id: '2', title: 'Ajouter typage', description: 'TypeScript obligatoire' },
            ],
        },
        {
            id: 'doing',
            title: 'En cours',
            tasks: [{ id: '3', title: 'Structurer projet', description: '' }],
        },
        {
            id: 'done',
            title: 'Fait',
            tasks: [],
        },
    ];

    const addTask = (columnId: string, title: string) => {
        const newTask: Task = {
            id: uuidv4(),
            title,
        };

        setColumns(prev =>
            prev.map(col =>
                col.id === columnId
                ? { ...col, tasks: [...col.tasks, newTask] }
                : col
            )
        );
    };

    return (
        <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
            {columns.map(column => (
                <Column key={column.id} column={column} onAddTask={addTask} />
            ))}
        </div>
    );
};

export default Board;
