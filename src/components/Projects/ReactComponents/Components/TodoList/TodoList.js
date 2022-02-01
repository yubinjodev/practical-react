import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./TodoList.css";

/*
1. add todo
2. display todo
3. cross off todo
4. show how much todo left
5. filter (all, incomplete, complete)
6. delete todo
7. delete all complete
    a. only show if at least one is complete
8. button to toggle all on/off
*/

export default class TodoList extends React.Component {
  componentDidMount() {
    document.title = "Todo List";
  }
  state = {
    todos: [],
    filter: "all",
  };

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  };

  handleCheck = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id == id) {
          // supposed to update
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  handleFiltering = (filter) => {
    this.setState({
      filter: filter,
    });
  };

  render() {
    let todos = [];

    if (this.state.filter === "all") {
      todos = this.state.todos;
    } else if (this.state.filter === "incomplete") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.filter === "complete") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        <div className="filter-buttons">
          <button onClick={() => this.handleFiltering("all")}>all</button>
          <button onClick={() => this.handleFiltering("incomplete")}>
            incomplete
          </button>
          <button onClick={() => this.handleFiltering("complete")}>
            complete
          </button>
        </div>
        <div>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              handleCheck={() => this.handleCheck(todo.id)}
              todo={todo}
            />
          ))}
          todos left :{" "}
          {this.state.todos.filter((todo) => !todo.complete).length}
        </div>
      </div>
    );
  }
}
