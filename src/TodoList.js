import React from "react"
import {connect} from "react-redux"
import TodoItem from "./TodoItem"
import AddTodo from "./AddTodo"

const TodoList = props => {
console.log(props)
    const mappedTodos = props.state.todos.map(todo=>
        <TodoItem 
            key={todo.id} todo={todo} 
            removeTodo={props.removeTodo} 
            toggleCompleted={props.toggleCompleted} 
            updateTask={props.updateTask}
        />)
    const deleteCompletedButton = 
        props.state.todos.find(todo => todo.completed) 
        && 
        <button onClick={props.removeCompletedTodos}>
            Delete All Completed Tasks ({props.state.todos.filter(todo => todo.completed).length})
        </button>
    return (
        <div>
            <h1>To Do List</h1>
            <AddTodo addTodo={props.addTodo} />
            {mappedTodos}
            {deleteCompletedButton}
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
        updateTask: (id, task) => dispatch({type: "UPDATE_TASK", id: id, task: task}),
        removeCompletedTodos: () => dispatch({type: "REMOVE_COMPLETED_TODOS"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)