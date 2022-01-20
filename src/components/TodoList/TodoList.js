import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

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

  handleCheck = (id) => {};

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />

        {this.state.todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            handle={this.handleCheck(todo.id)}
          />
        ))}
      </div>
    );
  }
}
