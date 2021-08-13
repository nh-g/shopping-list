import React, {useState, useEffect, useRef} from 'react'

export default function ItemForm(props) {
  const [openForm, setOpenForm] = useState(false);
  const toggleAddingItem = () => {
    setOpenForm(!openForm);
  };
 
  const initialInput = {
    title: "",
    price: "",
    quantity: "",
  };

  const [input, setInput] = useState(initialInput)

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
          <button className="button-main" onClick={toggleAddingItem}>
            ＋ Add items
          </button>
      )}

      {openForm && (
        <div className="popup">
          <form className="form" onSubmit={handleSubmit}>
            <h3>Add item to your list</h3>
                <label className="form-label" htmlFor="name">
                  Title*
                </label>
                <input
                  className="input"
                  placeholder="Any Title? e.g. VÖXLOV"
                  value={input.title}
                  name="title"
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="price">
                  Price
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
                  Create item
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

