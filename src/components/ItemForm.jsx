import React, { useState, useEffect, useRef } from "react";

export default function ItemForm(props) {
  const [openForm, setOpenForm] = useState(false);
  const toggleAddingItem = () => {
    setOpenForm(!openForm);
  };

  const initialInput = {
    name: "",
    price: "",
    quantity: "",
  };

  const [input, setInput] = useState(initialInput);

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  // Handle submit to prevent from reloading page when click to Add button
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 100000), // you can use date. There is one in ten trillions that you get a repeated id using math...
      name: input.name.toUpperCase(),
      price: input.price,
      quantity: input.quantity,
      isComplete: false, // nice name, i like it as much as acquired, both are equally good.
    });
    toggleAddingItem();
    setInput(initialInput);
  };

  return (
    <>
      {!openForm && (
        <button className="button-main" onClick={toggleAddingItem}>
          ＋ Add items
        </button>
      )}

      {openForm && (
        <div className="popup">
          <form className="form" onSubmit={handleSubmit}>
            <h3>Add item to your list</h3>

            {/* You can refactor the label and the input into a single component to make this one shorter and then pass the values as arguments */}
            <label className="form-label" htmlFor="name">
              Name*
            </label>
            <input
              className="input"
              placeholder="Any name? e.g. VÖXLOV"
              value={input.name}
              name="name"
              onChange={handleChange}
            />
            <label className="form-label" htmlFor="price">
              Price*
            </label>
            <input
              className="input"
              placeholder="What's Price? e.g. 100"
              value={input.price}
              name="price"
              onChange={handleChange}
            />
            <label className="form-label" htmlFor="quantity">
              Quantity
            </label>
            <input
              className="input"
              placeholder="How many? e.g. 30"
              value={input.quantity}
              name="quantity"
              onChange={handleChange}
            />
            <button className="button-main yellow" onClick={handleSubmit}>
              Create
            </button>
            <button className="close-icon" onClick={toggleAddingItem}>
              x
            </button>
          </form>
        </div>
      )}
    </>
  );
}
