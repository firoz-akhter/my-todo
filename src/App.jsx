import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ToDoList from './components/ToDoList'

let customList = [
  {id: 1, text: "complete project", complete: false},
  {id: 2, text: "Take interviews", complete: false},
  {id: 3, text: "Add items", complete: false}
]


function App() {
  // all states and functions will stay in this component
  // passed as props to child components
  const [itemList, setItemList] = useState(customList);
  const [editItem, setEditItem] = useState({});
  const [openEdit, setOpenEdit] = useState(false);
  // one item contains id, text and complete


  function handleAdd(e) {
    e.preventDefault();
    let input = document.querySelector(".new-item");
    if(input.value === "") {
      alert("todo can't be empty");
      return;
    }
    let newItem = {id: Date.now(), text: input.value, complete: false};
    setItemList([...itemList, newItem]);
    console.log(itemList);
    input.value = "";
  }

  function toggleComplete(e) {
    console.log("toggling complete");
    let currId = parseInt(e.target.parentElement.parentElement.parentElement.id);
    console.log("currId", currId);

    
    for(let i=0; i<itemList.length; i++) {
      if(itemList[i].id === currId) {
        itemList[i].complete = !itemList[i].complete;
        break; 
      }
    }
    setItemList(itemList);
    console.log(itemList);
  }

  function handleDelete(e) {
    console.log("deleting item...");
    // console.log(e.target.parentElement.parentElement);
    
    let currId = parseInt(e.target.parentElement.parentElement.parentElement.id);
    // console.log(e.target.parentElement.parentElement.parentElement)
    let newList = itemList.filter(item => item.id !== currId);
    setItemList(newList);
  }

  function handleEdit(e) {
    console.log("editing item...");
    
    let currId = parseInt(e.target.parentElement.parentElement.parentElement.id);
    for(let i=0; i<itemList.length; i++) {
      if(itemList[i].id === currId) {
        setEditItem(itemList[i]);
        setOpenEdit(!openEdit);
        break;
      }
    }

  }

  function handleSave(e) {
    e.preventDefault();
    let value = document.querySelector(".edit-input").value;
    editItem.text = value;
    setEditItem(editItem);

    let list = itemList;
    
    for(let i=0; i<list.length; i++) {
      if(list[i].id === editItem.id) {
        list[i].text = editItem.text;
        break;
      }
    }

    setItemList(list);
    // console.log(itemList);
    setOpenEdit(!openEdit);

  }

  function closeForm() {
    console.log("closing form")
    setOpenEdit(!openEdit);
  }








  return (
    <div className='app-container'>
      <Header />
      {/* will pass necessary states and functions to ToDoList component */}
      <ToDoList itemList={itemList} setItemList={setItemList} toggleComplete={toggleComplete} handleDelete={handleDelete} handleEdit={handleEdit} handleAdd={handleAdd} />

      {openEdit && 
        <>
          <div className='overlay' onClick={closeForm}></div>
          <form className='edit-form'>
            <input className='edit-input' type="text" defaultValue={editItem.text} />
            <button onClick={handleSave} >Save</button>
          </form>
        </>
      }
        
    </div>
  )
}

export default App
