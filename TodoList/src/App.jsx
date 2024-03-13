
import { useState } from 'react';
import './App.css'

function App() {
const [items,setItems] = useState([
        { text: "Learn JavaScript", done: false },
        { text: "Learn React", done: false },
        { text: "Play around in JSFiddle", done: true },
        { text: "Build something awesome", done: true }
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
