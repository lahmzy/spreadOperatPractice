import React, { useState } from "react";

function App() {
  const [list, setList] = useState("");
  const [collection, setCollection] = useState([]);

  function handleList(event) {
    const { value } = event.target;

    setList(value);
  }

  function handleCollection() {
    setCollection((prevValue) => {
      return [...prevValue, list];
    });
    setList("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleList} type="text" value={list} />
        <button onClick={handleCollection}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {collection.map((collect) => {
            return <li>{collect}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
