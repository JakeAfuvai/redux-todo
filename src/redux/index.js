import {createStore} from "redux"

const initialState = {
    todos: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                todos: [...state.todos, action.payload]
            }
        case "REMOVE_TODO":
            const todosArrCopy = [...state.todos]
            return {
                todos: [...todosArrCopy.filter(todo => todo.id !== action.payload)]
            }
        case "TOGGLE_COMPLETED":
            const todosArrCopyToggle = [...state.todos.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)]
            return {
                todos: todosArrCopyToggle
            }
        case "UPDATE_TASK":
            const todosArrCopyUpdateTask = [...state.todos.map(todo => todo.id === action.id ? {...todo, task: action.task} : todo)]
            return {
                todos: todosArrCopyUpdateTask
            } 
        case "REMOVE_COMPLETED_TODOS":
            const todosArrCopyRemCompleted = [...state.todos.filter(todo => !todo.completed)]
            return {
                todos: todosArrCopyRemCompleted
            }
        default:
            return state
    }
}

const store = createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

export default store