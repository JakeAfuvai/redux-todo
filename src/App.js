import React from "react"
import {connect} from "react-redux"
import AddTodo from "./AddTodo"
import TodoItem from "./TodoItem"
import "./App.css"

const App = props => {
    console.log(props)
    const mappedTodos = props.state.todos.map(todo=>
        <TodoItem 
            key={todo.id} todo={todo} 
            removeTodo={props.removeTodo} 
            toggleCompleted={props.toggleCompleted} 
            updateTask={props.updateTask}
        />)
    return (
        <div>
            <AddTodo addTodo={props.addTodo} />
            {mappedTodos}
        </div>
    )
}


const mapStateToProps = globalState => ({
    state: globalState
})

const mapDispatchToProps = dispatch => {
    return {
        addTodo: todo => dispatch({type: "ADD_TODO", payload: todo}),
        removeTodo: id => dispatch({type: "REMOVE_TODO", payload: id}),
        toggleCompleted: id => dispatch({type: "TOGGLE_COMPLETED", payload: id}),
        updateTask: (id, task) => dispatch({type: "UPDATE_TASK", id: id, task: task})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)