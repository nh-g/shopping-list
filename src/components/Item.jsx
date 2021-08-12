import React, { useState, useEffect } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import ItemForm from "./ItemForm";
export default function Item({
  listItem,
  completeItem,
  removeItem,
  updateTodo,
  clearComplete,
  viewCompleted,
}) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  // const [item, setItem] = useState(listItem);
  //   useEffect(() => {
  // console.log("Item.jsx", { item, listItem });
  //     setItem(listItem);
  //   }, [listItem]);



  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <ItemForm edit={edit} onSubmit={submitUpdate} />;
  }
  return listItem.map((item, index) => (
    <div
      className={item.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={item.id} onClick={() => completeItem(item.id)}>
        {item.title}, {item.price}:-, {item.quantity}
      </div>
      <div className="icons">
        <RiDeleteBinLine
          onClick={() => removeItem(item.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() =>
            setEdit({
              id: item.id,
              title: item.title,
              price: item.price,
              quantity: item.quantity,
            })
          }
          className="edit-icon"
        />
      </div>
    </div>
  ));
}
