import React, { useState } from "react";

import ItemForm from "./ItemForm";
import {validateAll,validate} from "../scripts/item-form-validator";
import { requestNewItem } from "../scripts/add-item";
export default function AddNewItem({ list, setList }) {
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

  const formEventHandler = {handleBlur,handleChange};
  const formData = {errors,touched,values}
 
  return (
    <>
      {!openForm && (
        <button className="button main" onClick={toggleAddingItem}>
          + Add a new item
        </button>
      )}

      {openForm && (
        <div className="popup">
          <form className="form" onSubmit={handleSubmit}>
            <ItemForm formEventHandler={formEventHandler} formData={formData}/>
            <div className="form-button">
              <button className="button second" onClick={handleSubmit}>Create</button>
              <button className="button second yellow"onClick={toggleAddingItem}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
