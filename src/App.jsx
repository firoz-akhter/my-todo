import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ToDoList from './components/ToDoList'


function App() {
  const [count, setCount] = useState(0)
  // all states and functions will stay in this component
  // passed as props to child components
  const [itemList, setItemList] = useState([]);
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
    <div>
      <Header />
      {/* will pass necessary states and functions to ToDoList component */}
      <ToDoList />
    </div>
  )
}

export default App
