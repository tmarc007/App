import "./ShoppingList.css";
import { useState } from "react";

function ShoppingList() {
  const [list, setList] = useState(["THIS PAGE IS UNDER CONSTUCTION!!!"]);
  const [text, setText] = useState("");

  function addItem() {
    console.log("adding");

    /**
     * create a copy
     * modify your copy
     * set the copy
     */
    let copy = [...list];
    copy.push(text);
    setList(copy);
  }
  // e stands for event
  function handleTextChange(e) {
    const val = e.target.value;
    // console.log("Text has changed", val);
    setText(val);
  }

  function deleteAll() {
    setList([]);
  }

  return (
    <div className="shopping-list page">
      <h3>Shopping List</h3>

      <div className="box btn">
        <input onChange={handleTextChange} type="text" />{" "}
        {/* Read the value when it changes */}
        <button onClick={addItem} className="btn btn-sm btn-success">
          Add
        </button>
        <button onClick={deleteAll} className="btn btn-sm btn-danger">
          Clear
        </button>
      </div>

      <ul>
        {list.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
    </div>
  );
}
export default ShoppingList;
