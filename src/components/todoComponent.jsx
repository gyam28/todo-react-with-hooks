import React from "react";

const ToDoComponent = ({ items, onCheck }) => {
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          className="list-group-item"
          key={item._id}
          style={{
            marginBottom: "3px",
            backgroundColor: "#ddd",
            borderColor: "#bcc",
            borderRadius: "15px",
            borderWidth: "3px",
            marginRight: "5px"
          }}
        >
          <input
            style={{
              marginRight: "5px",
              top: 0,
              left: 0
            }}
            type="checkbox"
            onClick={() => onCheck(item._id)}
            defaultChecked={item.completed}
          />
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default ToDoComponent;
