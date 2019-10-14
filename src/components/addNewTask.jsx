import React, { useState } from "react";

const AddNewTask = ({ onSubmit }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleInput = value => {
    setTaskTitle(value);
  };

  const localOnSubmit = e => {
    const title = taskTitle;
    setTaskTitle("");
    onSubmit(e, title);
  };

  return (
    <form onSubmit={e => localOnSubmit(e)}>
      <input
        style={{
          backgroundColor: "#ddd",
          borderColor: "#bcc",
          borderRadius: "15px",
          borderWidth: "2px"
        }}
        type="text"
        placeholder=" insert todo..."
        value={taskTitle}
        onChange={event => handleInput(event.target.value)}
        required
      />
      <input
        style={{
          borderWidth: "2px",
          backgroundColor: "#ddd",
          borderRadius: "15px",
          borderColor: "gray"
        }}
        type="submit"
      />
    </form>
  );
};

export default AddNewTask;
