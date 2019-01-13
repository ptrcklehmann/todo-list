import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <header>
        <h2>TodoList</h2>
        <Link to="/" >Home</Link> | <Link to="/about" >About</Link>
      </header>
    )
  }
}

export default Header
