import React, { Component } from 'react'

export class AddItem extends Component {

    state = {
        title: ''
    }

    handleFormChange = (e) => this.setState({ [e.target.name] : e.target.value})

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.addItem(this.state.title)
        this.setState({this: ''})
    }

    render() {
        return (
        <form style={{display:'flex'}} onSubmit={this.handleOnSubmit}>
            <input type="text" name="title" 
            placeholder="Add Todo" 
            style={{flex:'10', padding: '1rem'}}
            value={this.state.title}
            onChange={this.handleFormChange}/> 

            <input type="submit" value="Add Item" 
            style={{flex:'1'}} className="add-button"/>
        </form>
        )
    }
}

export default AddItem
