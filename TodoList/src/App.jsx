
import { useState } from 'react';
import './App.css'

function App() {
const [items,setItems] = useState([
    { id: 1, text: "Learn JavaScript", done: false },
    { id: 2, text: "Learn React", done: false },
    { id: 3, text: "Play around in JSFiddle", done: true },
    { id: 4, text: "Build something awesome", done: true }
      ]);
      
       const handleClick = (index) => {
    const updatedItems = [...items]; 
    updatedItems[index].done = !updatedItems[index].done; 
    setItems(updatedItems); 
  };
      
  return (
      <div className="card">
        <h2>Todos:</h2>
        <ol>
        {items.map((item,index) => (
          <li key={item.id}>
            <label>
              <input type="checkbox" checked={item.done} onChange={()=>{
                handleClick(index);
              }} /> 
              <span className={item.done ? "done" : ""}>{item.text}</span>
            </label>
          </li>
        ))}
        </ol>
      </div>
    );
}

export default App
