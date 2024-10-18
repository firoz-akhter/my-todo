import React from "react";
import ToDoItem from "./ToDoItem";



function ToDoList({itemList, setItemList}) {

    function handleSubmit(e) {
        e.preventDefault();
        let input = document.querySelector(".new-item");
        let newItem = {id: Date.now(), text: input.value, complete: false};
        setItemList([...itemList, newItem]);
        console.log(itemList);
    }



    return (
        <div>

            <form>
                <input className="new-item" type="text" />
                <button onClick={handleSubmit}>Add</button>
            </form>


            {/* map over itemList and render items */}
            {/* make sure each to-do item is displayed with unique key. */}
            {/* we will use id as key */}
            {/* <ToDoItem /> */}
            {
                itemList.map((item) => {
                    return <div key={item.id}><ToDoItem item={item} /></div>
                })
            }
        </div>
    )
}


export default ToDoList;