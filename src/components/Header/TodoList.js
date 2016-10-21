import React from "react";


export default class TodoList extends React.Component {
  render() {
  	
  	console.log(this)
    return (
      <div>
      	{this.props.todos.map(function(todo){
      		return <li key={todo.id}>{todo.text}</li>
      	})}
      </div>
    );
  }
}