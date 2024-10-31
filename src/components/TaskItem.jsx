import { useState } from 'react';

function TaskItem({ task, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);

    const handleEdit = () => {
        setIsEditing(true);
        setEditText(task.text); // Initialize editText with current task text
    };

    const handleSave = () => {
        onEdit(task.id, editText);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditText(task.text);
        setIsEditing(false);
    };

    return (
        <div className={'flex justify-between border rounded-lg p-5'}>
            {isEditing ? (
                <input
                    type="text"
                    onChange={(event) => setEditText(event.target.value)}
                    value={editText}
                    className={'border'}
                />
            ) : (
                <p>{task.text}</p>
            )}
            <div>
                {isEditing ? (
                    <>
                        <button
                            className={
                                'border rounded-lg bg-green-700 px-3 text-white'
                            }
                            onClick={handleSave}
                        >
                            Save
                        </button>
                        <button
                            className={
                                'border rounded-lg bg-gray-300 px-3 text-gray-700 px-3'
                            }
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            className={
                                'border rounded-lg bg-blue-700 px-3 text-white'
                            }
                            onClick={handleEdit}
                        >
                            Edit
                        </button>
                        <button
                            className={
                                'border rounded-lg bg-red-700 px-3 text-white'
                            }
                            onClick={() => onDelete(task.id)}
                        >
                            Delete
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default TaskItem;
