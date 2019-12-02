import {createStore} from "redux"
import uuid from "uuid"

const initialState = {
    todos: ["hello world", "goodbye world", "peace out world"]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                todos: [...state.todos]
            }
        case "REMOVE_TODO":
            const todosArrCopy = [...state.todos]
            return {
                todos: [...todosArrCopy.filter(todo => todo.id !== action.payload)]
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