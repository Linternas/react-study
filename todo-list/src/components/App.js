import React, { Component } from "react";
import PageTemplate from "./PageTemplate";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

class App extends Component {
  state = {
    input: "",
    todos: [
      { id: 0, text: "리액트 공부하기", done: true },
      { id: 1, text: "컴포넌트 스타일링 해보기", done: false },
    ],
  };

  id = 1;
  getId = () => {
    return ++this.id;
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      input: value,
    });
  };

  handleInsert = (e) => {
    const { todos, input } = this.state;

    const newTodo = {
      text: input,
      done: false,
      id: this.getId(),
    };

    this.setState({
      input: "",
      todos: [...todos, newTodo],
    });
  };

  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex((todo) => todo.id === id);

    const toggled = {
      ...todos[index],
      done: !todos[index].done,
    };

    this.setState({
      todos: [
        ...todos.splice(0, index),
        toggled,
        ...todos.splice(index + 1, todos.length),
      ],
    });
  };

  handleDelete = (id) => {

    console.log(id)
    const { todos } = this.state;

    const index = todos.findIndex((todo) => todo.id === id);

    console.log(index)

    this.setState({
      todos: [
        ...todos.splice(0, index),
        ...todos.splice(index + 1, todos.length),
      ],
    });
  };

  render() {
    const { input, todos } = this.state;

    const { handleChange, handleInsert, handleToggle, handleDelete } = this;

    return (
      <PageTemplate>
        <TodoInput
          onChange={handleChange}
          onInsert={handleInsert}
          value={input}
        />
        <TodoList todos={todos} onToggle={handleToggle} onRemove={handleDelete} />
      </PageTemplate>
    );
  }
}

export default App;
