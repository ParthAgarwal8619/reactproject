import React, { useState } from "react";

function TaskItem({ task, deleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleUpdate = () => {
    if (!newText) return;
    updateTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="task">
      {isEditing ? (
        <>
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <div>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;