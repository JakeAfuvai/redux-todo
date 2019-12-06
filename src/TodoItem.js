import React, {useState} from "react"

const TodoItem = props => {
    const [editMode, setEditMode] = useState(false)
    const [editedTask, setEditedTask] = useState("")
    const [showDate, setShowDate] = useState(false)

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

    const showMore = showDate ? 
        <>
            <p>Date Added: {props.todo.date.getMonth() + 1}/{props.todo.date.getDate()}</p> 
            <button onClick={() => setShowDate(false)}>show less</button>
        </>
        : 
        <button onClick={() => setShowDate(true)}>show more</button>

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
            {showMore}
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