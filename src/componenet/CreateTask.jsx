import React, { useState } from 'react';

const CreateTask = ({ addNewTask }) => {
    const [text, setText] = useState('');
    return (
        <div>
            <label htmlFor="">create new task</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='type your task' />
            <button
                onClick={() => {
                    if (text) {
                        addNewTask(text);
                        setText('');
                    } else {
                        alert('Invalid input');
                    }
                }}
            >
                Create Task
            </button>
        </div>
    );
};

export default CreateTask;