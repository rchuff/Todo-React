/*jshint esversion: 6 */

import React, {Component} from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import * as apiCalls from './api';

//Main component in application. Tracks state for TodoItems.
//Application loads todos, updates todos to complete, deletes todos and adds new todos.
class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
  }

//Initial Todo list load
  async componentDidMount(){
    let todos = await apiCalls.getTodos();
    this.setState({todos});
  }

//Adds new todo to database and updates state
  async addTodo(data){
    let newTodo = await apiCalls.addTodo(data);
    this.setState({todos: [...this.state.todos, newTodo]});
  }

//Deletes todo from database and updates state.
  async deleteTodo(id){
    await apiCalls.deleteTodo(id);
    const todos = this.state.todos.filter(todo => todo._id !== id);
    this.setState({todos: todos});
  }

//Updates todo status. Todo item itself updates styling.
  async updateTodo(todo){
    let updatedTodo = await apiCalls.updateTodo(todo);
    const todos = this.state.todos.map(todo => {
      if (todo._id === updatedTodo._id){
        todo.complete = !todo.complete
        return todo;
      }
      return todo;
    });
    this.setState({todos: todos})
  }


  render(){
    const todos = this.state.todos.map((todo) => (
      //Passes in all todo items that aren't completed.
      <TodoItem
        key = {todo._id}
        {...todo}
        onDelete={this.deleteTodo.bind(this,todo._id)}
        onToggle={this.updateTodo.bind(this,todo)}
        />
    ));
    return (
      <div id="list-page" className={this.props.started === false ? "hide" : "show"}>
        <div className="inner-title">
          <h1 className="title">Items on the agenda</h1>
          <h3 className="description"><em>“Simplicity boils down to two steps: Identify the essential. Eliminate the rest.” – Leo Babauta</em></h3>
          <TodoForm addTodo={this.addTodo}/>
          <ul>
          {todos}
          </ul>
        </div>
      </div>
    )
  }
}

export default TodoList;
