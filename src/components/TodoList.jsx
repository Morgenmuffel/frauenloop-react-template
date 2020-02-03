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

  handleDelete = (indexToDelete) => {
    
    //Method 1
    // copy todo list
    const editedTodos = [...this.state.todos];

    //remove the todo at 'index'
    editedTodos.splice(indexToDelete, 1);

    //save the updated todo list to state
    this.setState({
      todos: editedTodos
    })

    //Method 2
    // make a copy of the todo list, but without the clicked item
    const editedTodosWithFilter = this.state.todos.filter( (item, index) =>  {
      return indexToDelete !== index;
    });

    this.setState({
      todos: editedTodosWithFilter
    })

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
            <li key={index}>{item.content}
              <span className="delete-container">
                <button
                  type="button"
                  className="deleteButton"
                  onClick={() => {
                    this.handleDelete(index)
                  }}>Delete</button>
              </span>
            </li>
          ))}
        </ul>

      </>
    );
  }
}

export default TodoList;