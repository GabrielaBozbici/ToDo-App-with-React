import React from "react";


export default class TodoList extends React.Component {
  render() {
  	
  	console.log(this)
    return (
      <div>
      	{this.props.todos.map(function(todo){
      		return (
            <div key={todo.id}>
              <li>{todo.text}</li>
              <button>Delete</button>
            </div>
            )
      	})}
      </div>
    );
  }
}