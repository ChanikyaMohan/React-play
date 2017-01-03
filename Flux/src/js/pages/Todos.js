import React from "react";

import Todo from "../components/Todo";
import TodoStore from "../stores/TodoStore";
import * as TodoAction from "../actions/Todoactions";


export default class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos : TodoStore.getAll()
    };
  }

  componentWillMount(){
    TodoStore.on("change", () => {
      this.setState({
        todos : TodoStore.getAll()
      });
    });
  }
    createTodo(){
        TodoAction.createTodo(Date.now());
    }


  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <button onClick={this.createTodo.bind(this)} class="btn btn-info"> Create!</button>
          <button  class="btn btn-danger"> Delete!</button>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
