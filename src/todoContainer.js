import React from "react"
import TodoList from "./TodoList"
class todoContainer extends React.Component{
    state = {
        todos : [
            {
                id:1,
                title:"Set up Development Server",
                completed: true
            },
            {
                id:2,
                title:"Develop Website and Add Content ",
                completed: true
            },
            {
                id:3,
                title:"Develop Website and Add Content ",
                completed: false
            },
        ]
    };
    render(){
        return(
            <TodoList todos={this.state.todos}/>
            // Here store the components in the variable todos and pass it to the class todods 
        );
    }
}
export default todoContainer
