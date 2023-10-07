import React from "react"
import TodoItem from "./TodoItem";
class TodoList extends React.Component{
    render(){
        return(
            <ul>
                {this.props.todos.map(todo =>(
                    <TodoItem key={todo.id} todo={todo}/>
                    // Take the compenents from their Id's and store it in a variable todo and give it to the class 
                ))}
            </ul>
        )
    }
}

export default TodoList