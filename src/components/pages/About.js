import React, { Component } from 'react'


export class About extends Component {
    getAboutStyle = () => { 
        return {
        fontSize: '0.9rem',
        color:  	'#38454f',
        padding: '2rem',
        border: 'none'
        }
    }

    render() {
        return (
        <div style={this.getAboutStyle()}>
        <h2>About</h2>
        <p>This is the TodoList app v1.0.0. My very first React application</p>
        </div>
         )
    }
}

export default About
