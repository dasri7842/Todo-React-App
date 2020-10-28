import React, { Component } from 'react'
import './App.css'
import Todos  from "./components/Todos";
import Header from './components/layout/Header'
import Addtodo from './components/Addtodo'
import { v4 as uuidv4 } from 'uuid';
class App extends Component {
  state = {
    todos : []
  }
  complete = (id) =>{
    this.setState({
      todos : this.state.todos.map(todo => {
        if(todo.id===id) {
          todo.iscompleted = !todo.iscompleted
        }
        return todo;
      }) 
    })
  }
  delete = (id) =>{
    this.setState({
      todos : [...this.state.todos.filter(todo => todo.id!==id)]
    })
  }
  addtodo = (title) =>{
    const newtodo ={
      id : uuidv4(),
      title ,
      iscompleted : false 
    }
    this.setState({
      todos : [...this.state.todos,newtodo]
    })
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Addtodo addtodo = {this.addtodo} />
        <div className="container-body">
          <Todos 
              todos = {this.state.todos} 
              complete = {this.complete}
              del = {this.delete}
            />
        </div>
      </div>
    )
  }
}
export default App;
