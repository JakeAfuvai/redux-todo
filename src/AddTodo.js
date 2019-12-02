import React, {useState} from "react"
import uuid from "uuid"

const AddTodo = props => {
    const [todo, setTodo] = useState("")
    const handleSubmit = e => {
        e.preventDefault()
        const newTodo = {
            id: uuid.v4(),
            completed: false,
            task: todo
        }
        props.addTodo(newTodo)
        setTodo("")
    }
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input 
                type="text"
                name="todo"
                value={todo}
                placeholder="Add Task (go shopping...)"
                onChange={e => setTodo(e.target.value)}
            />
            <button>+</button>
        </form>
    )
}

export default AddTodo