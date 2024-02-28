import React from 'react';

const ShowTasks = ({ tasks, toggleComplete }) => {
    console.log(tasks);
    return (
        <div>
            {
                tasks.length > 0 ? <ul>
                    {
                        tasks.map((task) => {
                            return (
                                <li key={task.id} onClick={() => toggleComplete(task.id)} style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
                                    {task.text}
                                </li>
                            )
                        })
                    }
                </ul> : <p>no task found</p>
            }
        </div>
    );
};

export default ShowTasks;