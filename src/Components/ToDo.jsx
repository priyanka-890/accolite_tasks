import React from "react";
import "./ToDo.css";
import ToDoList from "./ToDoList";

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      value: "",
    };
  }
  onChange = (e) => {
    this.setState({ value: e.target.value });
  };
  handleAdd = () => {
    if (this.state.value !== "") {
      this.setState({
        todo: [...this.state.todo, this.state.value],
        value: "",
      });
    }
    console.log(this.state);
  };

  render() {
    return (
      <>
        <input
          placeholder="add a new task"
          value={this.state.value}
          onChange={this.onChange}
          data-testid="input"
          className="input"
        ></input>
        <button
          onClick={this.handleAdd}
          data-testid="addButton"
          className="addButton"
        >
          ADD
        </button>
        {/* <ul className="todo-list">
          {this.state.todo?.map((item, i) => {
            return <li>{item.task_name}</li>;
          })}
        </ul> */}
        <ToDoList todo={this.state.todo} />
      </>
    );
  }
}
export default ToDo;
