import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddItem from './components/AddItem'
import About from './components/pages/About'
import UUID from 'uuid'


class App extends Component {

  state = {
    todos: [
      {
        id: UUID.v4(),
        title: 'Take out the trash',
        completed: false
      }, {
        id: UUID.v4(),
        title: 'Walk Ponyo',
        completed: false
      }, {
        id: UUID.v4(),
        title: 'Call Mama',
        completed: false
      }
  ]
  }
  markComplete = (id) => {
    console.log("from app.js " + id)
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(
        todo => todo.id !== id)]
    })
  }
  addItem = (title) => {
    console.log(title)
    const newItem = {
      id: UUID.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newItem]})
  }
 
  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddItem addItem={this.addItem} />
              <Todos todos={this.state.todos} 
                     markComplete={this.markComplete} 
                     delTodo={this.delTodo} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </div>
      </Router>
      
    );
  }
}

export default App
