import type { Task as TaskType } from '../../types/types';

interface TaskProps {
    task: TaskType;
}

const Task = ({ task }: TaskProps) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '0.5rem', marginBottom: '0.5rem', borderRadius: '4px' }}>
            <strong>{task.title}</strong>
            {task.description && <p>{task.description}</p>}
        </div>
    );
};

export default Task;
