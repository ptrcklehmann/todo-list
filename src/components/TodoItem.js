import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {

    getStyle = () => { 
        return {
        color: '#122034',
        background: '#d2ddd8',
        padding: '1rem',
        marginBotton: '.3rem',
        //borderBottom: '1px #4b666e dashed',
        textDecoration: this.props.todo.completed ?
        'line-through' : 'none'
        }
    }
    getButtonStyle = () => { 
        return {
        fontSize: '0.9rem',
        color:  	'#ffffff',
        background: '#d60404',
        padding: '.3rem',
        float: 'right',
        borderRadius: '0.3rem',
        border: 'none'
        }
    }
    
  render() {
    const {id, title} = this.props.todo
    return (
      <div style={this.getStyle()}>
        <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id) }/> 
            &nbsp; 
            {title}
            &nbsp; 
            <button style={this.getButtonStyle()} 
            onClick={this.props.delTodo.bind(this, id) }>
            Delete
            </button>
        </p>
      </div>
    )
  }
}
//Proptypes
TodoItem.propTypes = {
    todos: PropTypes.array.isRequired
}


export default TodoItem
