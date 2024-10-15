import React, { useState } from "react";
import "./form.css";

function Form({ additem }) {
  const [input, setinput] = useState();

  function adminname(e) {
    setinput({
      ...input,
      [e.target.name]: e.target.value,
      // 'id':Math.random()*10
    });
  }

  function submit(e) {
    e.preventDefault();
    console.log(input);
    additem(input);
  }
  return (
    <div className="formbox">
      <div className="heading">Add The Item</div>
      <div className="form">
        <input
          type="text"
          onChange={adminname}
          name="image"
          placeholder="Enter the Image"
        />

        <input
          type="text"
          onChange={adminname}
          name="name"
          placeholder="Enter the Name "
        />

        <input
          type="number"
          onChange={adminname}
          name="price"
          placeholder="Enter the Price"
        />
        <button onClick={submit}>add item</button>
      </div>
    </div>
  );
}

export default Form;
