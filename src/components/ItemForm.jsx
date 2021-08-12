import React, {useState, useEffect, useRef} from 'react'

export default function ItemForm(props, { toggleForm }) {
  const [openForm, setOpenForm] = useState(false);
  const toggleAddingItem = () => {
    setOpenForm(!openForm);
  };
 
  const initialInput = {
    title: "",
    price: "",
    quantity: "",
  };

  const [input, setInput] = useState(
    props.edit ? props.edit.value || "": initialInput
  ); // to display the current value before edit

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
      id: Math.floor(Math.random() * 100000),
      title: input.title.toUpperCase(),
      price: input.price,
      quantity: input.quantity,
      isComplete: false
    });
    toggleAddingItem();
    setInput(initialInput);
    
  };
  
  return (
    <>
      {!openForm && (
        <div>
          <button className="button" onClick={toggleAddingItem}>
            ＋ Add items
          </button>
        </div>
      )}

      {openForm && (
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
                  onChange={handleChange}
                />
                <input
                  className="input edit"
                  placeholder="Update item's PRICE"
                  value={input.price}
                  name="price"
                  onChange={handleChange}
                />
                <input
                  className="input edit"
                  placeholder="Update item's QUANTITY"
                  value={input.quantity}
                  name="quantity"
                  onChange={handleChange}
                />
                <button className="button edit">Update item</button>
                <button className="close-icon" onClick={toggleForm}>
                  x
                </button>
              </>
            ) : (
              <>
                <input
                  className="input"
                  placeholder="Any Title? e.g. VÖXLOV"
                  value={input.title}
                  name="title"
                  onChange={handleChange}
                />
                <input
                  className="input"
                  placeholder="What's Price? e.g. 100"
                  value={input.price}
                  name="price"
                  onChange={handleChange}
                />
                <input
                  className="input"
                  placeholder="How many? e.g. 30"
                  value={input.quantity}
                  name="quantity"
                  onChange={handleChange}
                />
                <button className="button" onClick={handleSubmit}>
                  Add item to the list
                </button>
                <button className="close-icon" onClick={toggleAddingItem}>
                  x
                </button>
              </>
            )}
          </form>
        </div>
      )}
    </>
  );
}

