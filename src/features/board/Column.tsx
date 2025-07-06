import type { Column as ColumnType } from '../../types/types';
import Task from './Task';

interface ColumnProps {
    column: ColumnType;
}

const Column = ({ column }: ColumnProps) => {
    return (
        <div style={{ width: '300px', padding: '1rem', background: '#f4f4f4', borderRadius: '6px' }}>
            <h2>{column.title}</h2>
            {column.tasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default Column;
