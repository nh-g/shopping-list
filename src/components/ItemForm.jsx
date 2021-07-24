import React, {useState, useEffect, useRef} from 'react'

export default function ItemForm(props) {
  const initialInput = {
    title: "",
    price: "",
    quantity: "",
  }

  const [input, setInput] = useState(
    props.edit ? props.edit.value || "" : initialInput
  ) // to display the current value before edit

  // const inputRef = useRef(null);
  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  // Handle change
  const handleChange = (e) => {
    const {name, value} = e.target

    setInput({
      ...input,
      [name]: value
    });
  };

  // Handle submit to prevent from reloading page when click to Add button
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100000), 
      // text: input
      title: input.title, price: input.price, quantity: input.quantity
    });
    setInput(initialInput);
  };
  console.log("INPUT", input)

  return (
    <form className="form" onSubmit={handleSubmit}>
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
          <button className="button">Add</button>
        </>
      )}
    </form>
  );
}

