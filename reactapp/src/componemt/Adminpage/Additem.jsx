import React, { useState } from "react";
import "../adminpagecss/form.css";
import axios from "axios";
import Layout from "./Layout";

function Form({ additem }) {
  const [itemdata, setitemdata] = useState({
    name: "",
    price: "",
    rating: "",
    color: "",
    size: "",
    img: "",
  });

  function adminname(e) {
    setitemdata({
      ...itemdata,
      [e.target.name]: e.target.value,
      // 'id':Math.random()*10
    });
  }

  const submit = async (e) => {
    e.preventDefault();

    try {
      console.log(itemdata)
      const response = await axios.post("/product", itemdata);
      console.log(response);
      alert("Item is added Sucessfully");
    } catch (err) {
      console.log("internal error", err);
    }
  };
  return (
    <>
      <Layout>
        <div className="mainform">
          <div className="formbox">
            <div className="heading">
              <img src="https://i.ibb.co/KzgGznb/adminadditem1.png" alt="" />
            </div>
            <div className="formadmin">
              <div className="inputbox">
                <label>Enter the Item Name </label>
                <input
                  type="text"
                  onChange={adminname}
                  name="name"
                  placeholder="Enter the name"
                />
              </div>
              <div className="inputbox">
                <label>Enter the Item Price</label>

                <input
                  type="number"
                  onChange={adminname}
                  name="price"
                  placeholder="Enter the price"
                />
              </div>

              <div className="inputbox">
                <label>Enter the Item Color</label>

                <input
                  type="text"
                  onChange={adminname}
                  name="color"
                  placeholder="Enter the color"
                />
              </div>
              <div className="inputbox">
                <label>Enter the Item Size </label>

                <input
                  type="text"
                  onChange={adminname}
                  name="size"
                  placeholder="Enter the size"
                />
              </div>
              <div className="inputbox">
                <label>Enter the Item Image Path </label>

                <input
                  type="text"
                  onChange={adminname}
                  name="img"
                  placeholder="Enter the image"
                />
              </div>
              <div className="inputbox">
                <button className="adminformsubmit" onClick={submit}>
                  add item
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Form;
