import React, { useState } from "react";

import FormDataField from "./FormDataField";
// import {validateAll as formValidation, validate,
// } from "../javaScripts/item-form-validator";

import {validateAll,validate} from "../javaScripts/item-form-validator";
import { requestNewItem } from "../javaScripts/add-item";
export default function ItemForm({ list, setList }) {
  const initialInput = {
    productName: "",
    price: "",
    quantity: "",
  };

  const [openForm, setOpenForm] = useState(false);
  const [values, setValues] = useState(initialInput);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const formValidation = validateAll(values);

  const toggleAddingItem = () => {
    setOpenForm(!openForm);
  };

  const handleChange = (event) => {
    const { name, value: newValue, type } = event.target;
    //only allow number in number input field type
    const value = type === "number" ? +newValue : newValue;
    //save field input values
    setValues({
      ...values,
      [name]: value,
    });
    //set the field was touched/modified
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    //remove whatever error was there previously
    const { [name]: removedError, ...rest } = errors;
    //check for a new error
    const error = validate(name, value);
    //validate the field if the value has been touched
    setErrors({
      ...rest,
      ...(error && { [name]: touched[name] && error }),
    });
  };

  // Handle submit to prevent from reloading page when click to Add button
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = requestNewItem(values);

    setErrors(formValidation.errors);
    setTouched(formValidation.touched);

    if (
      !Object.values(formValidation.errors).length && //errors object is empty
      Object.values(formValidation.touched).length ===
        Object.values(values).length && //all fields were touched
      Object.values(formValidation.touched).every((t) => t === true) // every touched field is true
    ) {
      setList([...list, newItem]);
      toggleAddingItem();
      setValues(initialInput);
    }
  };

  console.log("TOUCHed", touched)
  console.log("ERRORS", errors);
  console.log("Values", values);

  return (
    <>
      {!openForm && (
        <button className="button" onClick={toggleAddingItem}>
          + Add a new item
        </button>
      )}

      {openForm && (
        <div className="popup">
          <form className="form" onSubmit={handleSubmit}>
            {/* <h4>Add item to your list</h4> */}
            <FormDataField
              handleBlur={handleBlur}
              handleChange={handleChange}
              values={values}
              fieldName={"productName"}
              inputType={"text"}
              placeholder="e.g. VÖXLOV"
              label={"What's product name? *"}
            />
            <span className="error">
              {touched.productName && errors.productName}
            </span>

            <FormDataField
              handleBlur={handleBlur}
              handleChange={handleChange}
              values={values}
              fieldName={"price"}
              inputType={"text"}
              placeholder="e.g. 100"
              label={"What's product price? *"}
            />
            <span className="error">{touched.price && errors.price}</span>

            <div className="form-group">
              <label htmlFor="quantity">How many items? </label>
              <input
                type="number"
                className="input"
                id="quantity"
                placeholder="e.g. 29"
                value={values.quantity || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                name="quantity"
                min="0"
                required
              />
            </div>

            <div className="form-button">
              <button className="button second" onClick={handleSubmit}>
                Create
              </button>

              <button
                className="button second yellow"
                onClick={toggleAddingItem}
              >
                Cancel
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
