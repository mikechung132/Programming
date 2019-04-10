import React from 'react';
import ToDoItem from './components/ToDoItem';
import './css/todoStyle.css';
import todoData from './data/todoData';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todo: todoData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id){
    this.setState(prevState => {
      const updatedList = prevState.todo.map(updateToDo => {
        if(updateToDo.id === id){
          updateToDo.complete = !updateToDo.complete;
        }
        return updateToDo;
      });
      return {
        todo: updatedList
      }
    })
  }

  render() {
    const todoList = this.state.todo.map(item =>
      <ToDoItem
          key={item.id}
          item={item}
          handleChange={this.handleChange}
      />
    );
    return (
      <div className="todo-list">
        <h2>To Do List</h2>
        {todoList}
      </div>
    );
  }
}

export default App;
