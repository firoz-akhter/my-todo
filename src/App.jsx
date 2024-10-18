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
  // one item contains id, text and complete


  function addItem() {
    console.log("adding item to itemList");
  }

  function toggleComplete() {
    console.log("toggling complete");
  }

  function deleteItem() {
    console.log("deleting item...");
  }

  function editItem() {
    console.log("editing item...");
  }








  return (
    <div className='app-container'>
      <Header />
      {/* will pass necessary states and functions to ToDoList component */}
      <ToDoList itemList={itemList} setItemList={setItemList} />
    </div>
  )
}

export default App
