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

    return (
        <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
            {boardData.map(column => (
                <Column key={column.id} column={column} />
            ))}
        </div>
    );
};

export default Board;
