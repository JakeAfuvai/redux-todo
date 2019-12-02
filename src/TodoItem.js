import React, {useState} from "react"

const TodoItem = props => {
    const [editMode, setEditMode] = useState(false)
    const [editedTask, setEditedTask] = useState("")

    const completedStyle = props.todo.completed ?
        {
            color: "red"
        }
        :
        null

    const taskDisplay = !editMode ? 
        <p style={completedStyle}>{props.todo.task}</p> 
        : 
        <input 
            className="edit-input" 
            style={{fontSize: "10", border: "none"}} 
            type="text"
            placeholder={props.todo.task} 
            onChange={e => setEditedTask(e.target.value)}
        />

    const saveEditButton = editMode ? "save" : "edit"

    const cancelEditButton = <button onClick={() => setEditMode(false)}>cancel</button>

    const handleClick = () => {
        props.removeTodo(props.todo.id)
    }

    const handleSaveEdit = () => {
        props.updateTask(props.todo.id, editedTask)
        setEditMode(false)  
        setEditedTask("")
    }
    return (
        <div>
            {taskDisplay}
            <p>{props.todo.id}</p>
            <button onClick={handleClick}>-</button>
            <input 
                type="checkbox"
                checked={props.todo.completed}
                onChange={() => props.toggleCompleted(props.todo.id)}
            />
            <button onClick={!editMode ? 
                () => setEditMode(!editMode)
                :
                handleSaveEdit}
            >{saveEditButton}</button>
            {editMode && cancelEditButton}
        </div>
    )
}

export default TodoItem