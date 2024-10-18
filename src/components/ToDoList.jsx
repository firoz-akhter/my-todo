import React from "react";
import ToDoItem from "./ToDoItem";



function ToDoList() {
    return (
        <div>ToDoList component
            {/* map over itemList and render items */}
            {/* make sure each to-do item is displayed with unique key. */}
            {/* we will use id as key */}
            <ToDoItem />
        </div>
    )
}


export default ToDoList;