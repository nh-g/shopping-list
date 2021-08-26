import React, { useState, useEffect, useRef } from "react";
import FormDataField from "./FormDataField";

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

  const [values, setValues] = useState(initialInput);

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // Handle submit to prevent from reloading page when click to Add button
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 100000),
      name: values.name.toUpperCase(),
      price: values.price,
      quantity: values.quantity,
      isComplete: false,
    });
    toggleAddingItem();
    setValues(initialInput);
  };

  return (
    <>
      {!openForm && (
        <button className="button" onClick={toggleAddingItem}>
          ＋ ADD ITEMS
        </button>
      )}

      {openForm && (
        <div className="popup">
          <form className="form" onSubmit={handleSubmit}>
            {/* <h4>Add item to your list</h4> */}
            <FormDataField
              // handleBlur={handleBlur}
              handleChange={handleChange}
              values={values}
              fieldName={"name"}
              inputType={"text"}
              placeholder="e.g. VÖXLOV"
              label={"What's product name? *"}
            />
            <FormDataField
              // handleBlur={handleBlur}
              handleChange={handleChange}
              values={values}
              fieldName={"price"}
              inputType={"text"}
              placeholder="e.g. 100"
              label={"What's product price? *"}
            />
            <div className="form-group">
              <label htmlFor="quantity">How many items? </label>
              <input
                type="number"
                className="input"
                id="quantity"
                placeholder="e.g. 29"
                value={values.quantity || ""}
                onChange={handleChange}
                // onBlur={handleBlur}
                name="quantity"
                min="0"
                required
              />
              {/* <span className="error">
                {touched.quantity && errors.quantity}
              </span> */}
            </div>
            <div className="form-button">
              <button className="button second" onClick={handleSubmit}>
                CREATE
              </button>
              
              <button
                className="button second yellow"
                onClick={toggleAddingItem}
              >
                CANCEL
              </button>
            </div>

            {/* <button className="close-icon" onClick={toggleAddingItem}>
              x
            </button> */}
          </form>
        </div>
      )}
    </>
  );
}
