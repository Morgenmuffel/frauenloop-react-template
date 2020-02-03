import React, { Component } from 'react';

class TodoList extends Component {
  state = {
    input: "",
    todos: []
  };

  handleSubmit = e => {
    e.preventDefault();

    // copy todo list
    const editedTodos = [...this.state.todos];

    //check if the input is an empty string or just spaces
    if(this.state.input.trim() !== '') {
      
      // add a new todo to the list
      editedTodos.push({ content: this.state.input });

      // save the updated list and reset `input`
      this.setState({
        todos: editedTodos,
        input:''
      });
    }


  };

  onChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.onChange}
          ></input>
          <button>save todo</button>
        </form>
        <ul>
          {this.state.todos.map((item, index) => (
            <li key={index}>{item.content}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default TodoList;