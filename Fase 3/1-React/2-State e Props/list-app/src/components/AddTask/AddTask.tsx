import React, { useState } from "react";

interface AddTaskProps {
  onAddTask: (taskName: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask(taskName);
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="New task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};
export default AddTask;
