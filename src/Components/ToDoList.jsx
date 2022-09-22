import React from "react";
import "./ToDo.css";

class ToDoList extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="todo-list">
        <ol aria-label="to-do-list">
          {this.props.todo?.map((item, i) => {
            return (
              <li data-testid="listitem" key={i}>
                {item}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default ToDoList;
