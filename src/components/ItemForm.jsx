import React, {useState, useEffect, useRef} from 'react'

export default function ItemForm(props, { toggleForm }) {
  const initialInput = {
    title: "",
    price: "",
    quantity: "",
  };

  const [input, setInput] = useState(
    props.edit ? props.edit.value || "" : initialInput
  ); // to display the current value before edit

  // const inputRef = useRef(null);
  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  // Handle submit to prevent from reloading page when click to Add button
  // console.log("handleClose", handleClose);
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100000),
      title: input.title,
      price: input.price,
      quantity: input.quantity,
    });
    props.toggleForm();
    setInput(initialInput);
    
  };
  console.log("INPUT", input);

  return (
    <div className="popup">
      <form className="form" onSubmit={handleSubmit}>
        <h3>Add item</h3>
        {props.edit ? (
          <>
            <input
              className="input edit"
              placeholder="Update item's TITLE"
              value={input.title}
              name="title"
              // ref={inputRef}
              onChange={handleChange}
            />
            <input
              className="input edit"
              placeholder="Update item's PRICE"
              value={input.price}
              name="price"
              // ref={inputRef}
              onChange={handleChange}
            />
            <input
              className="input edit"
              placeholder="Update item's QUANTITY"
              value={input.quantity}
              name="quantity"
              // ref={inputRef}
              onChange={handleChange}
            />
            <button className="button edit">Update</button>
          </>
        ) : (
          <>
            <input
              className="input"
              placeholder="Add item's TITLE, e.g. VÖXLOV"
              value={input.title}
              name="title"
              // ref={inputRef}
              onChange={handleChange}
            />
            <input
              className="input"
              placeholder="Add item's PRICE, e.g. 100"
              value={input.price}
              name="price"
              // ref={inputRef}
              onChange={handleChange}
            />
            <input
              className="input"
              placeholder="Add item's QUANTITY, e.g. 3"
              value={input.quantity}
              name="quantity"
              // ref={inputRef}
              onChange={handleChange}
            />
            <button className="button">Add item to the list</button>
            <button className="close-icon" onClick={toggleForm}>
              x
            </button>
          </>
        )}
      </form>
    </div>
  );
}

