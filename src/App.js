import React, { useState } from "react";
import './styles.css'

function App() {
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);

  function handler(e) {
    e.preventDefault();
    setItems((prevItems) => {
      return [...prevItems, name];
    });
    setName("");
  }

  function addItem(todoItem) {
    return <li>{todoItem}</li>;
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button onClick={handler}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{items.map(addItem)}</ul>
      </div>
    </div>
  );
}

export default App;