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
  };

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  };

  filterAll = (todo) => {
    // <Todo />;
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

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        <div className="filter-buttons">
          <button onClick={this.filterAll}>all</button>
          <button>incomplete</button>
          <button>complete</button>
        </div>
        <div>
          {this.state.todos.map((todo) => (
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
