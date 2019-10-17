import React, { Component } from "react";
import { getData, createData } from "./mockTodoData";
import ToDoComponent from "./todoComponent";
import AddNewTask from "./addNewTask";

class TaskManager extends Component {
  state = { tasks: [] };

  componentDidMount() {
    const data = getData();
    this.setState({ tasks: data });
  }

  handleCheck = _id => {
    const tasks = [...this.state.tasks];
    const filteredTask = tasks.filter(task => task._id === _id);
    const index = tasks.indexOf(filteredTask[0]);
    tasks[index] = { ...tasks[index] };
    tasks[index].completed = !tasks[index].completed;
    this.setState({ tasks });
  };

  handleSubmit = (e, text) => {
    const { tasks } = { ...this.state };
    e.preventDefault();
    const newTask = createData(text);
    tasks.push(newTask);
    console.log(newTask);
    this.setState({ tasks });
  };

  handleChange = e => {
    const { tasks } = { ...this.state };
    const updated = tasks;
    const { name, value } = e.target;
    updated[name] = value;
    this.setState({ tasks: updated });
  };

  render() {
    return (
      <div className="d-flex flex-column justify-content-start">
        <div className="p-2 bd-highlight">
          <AddNewTask onSubmit={this.handleSubmit} />
        </div>
        <div className="p-2 bd-highlight ">
          <h2>To Do</h2>
          <ToDoComponent
            items={this.state.tasks.filter(task => task.completed === false)}
            onCheck={this.handleCheck}
          />
        </div>
        <br />
        <div className="p-2 bd-highlight">
          <h2>Done</h2>
          <ToDoComponent
            items={this.state.tasks.filter(task => task.completed === true)}
            onCheck={this.handleCheck}
          />
        </div>
      </div>
    );
  }
}

export default TaskManager;
