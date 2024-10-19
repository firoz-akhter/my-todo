import React from "react"



function ToDoItem({item, handleDelete, handleEdit, toggleComplete}) {
    return (
        <div key={item.id} id={item.id}>
            {item.text}
            <button onClick={toggleComplete}>Complete</button>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}


export default ToDoItem