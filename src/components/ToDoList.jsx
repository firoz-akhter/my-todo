import React from "react";
import ToDoItem from "./ToDoItem";



function ToDoList({itemList, setItemList, handleDelete, toggleComplete, handleEdit, handleAdd}) {

    



    return (
        <div>

            <form>
                <input className="new-item" type="text" />
                <button onClick={handleAdd}>Add</button>
            </form>


         
            {
                itemList.map((item) => {
                    return   (                   
                        <ToDoItem key={item.id} handleDelete={handleDelete} handleEdit={handleEdit} toggleComplete={toggleComplete} item={item} />
                    )

                })
            }
        </div>
    )
}


export default ToDoList;