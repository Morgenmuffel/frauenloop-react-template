import React from "react";
import TodoList from "./components/TodoList";

class App extends React.Component {

  render() {
    return (
      <main>
        <h1>Todo List</h1>
        <TodoList />
      </main>
    );
  }
}

export default App;
