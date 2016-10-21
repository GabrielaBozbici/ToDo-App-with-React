import React, {Component} from 'react';

import TodoList from "./Header/TodoList";



export default class Todo extends Component {
	handleChange(e){
		this.setState({
			inputValue: e.target.value
		})
		console.log("state", this.state)
	}

	addToDo(){
		var newtext = this.state.inputValue;
		console.log("text de pus", newtext)
		this.props.addNew(newtext)

	}
  	render() {
	  	console.log(this)
	    return ( 
	    	<div>
	    		<h1> To-Do List App</h1>
	    		<input type="text" onChange={this.handleChange.bind(this)} />
	    		<button onClick={this.addToDo.bind(this)} >Add todo!</button>
	    		<TodoList  todos={this.props.todos}/ >
	    	</div>
	    );
  	}
}