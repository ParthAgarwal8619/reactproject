import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, updateTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
}

export default TaskList;