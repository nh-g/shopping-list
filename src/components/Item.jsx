import React,{useState} from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import {TiEdit} from 'react-icons/ti'
import ItemForm from './ItemForm'
export default function Item({
  listItem,
  completeTodo,
  removeTodo,
  updateTodo,
  clearComplete,
  viewCompleted,
}) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  
  const [item, setItem] = useState(listItem);
  const [isComplete, setIsComplete] = useState(item.isComplete);
  console.log("item.jsx", item);
  // console.log("setITEMS1", setItem);
  // const itemsArr = [item];

  const completeItem = (id) => {
    let updatedList = item.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    console.log("ITEMS", updatedList);    
    console.log("setITEMS", setItem );
    setItem(updatedList);
    // setItems(updatedList.filter((item) => item.isComplete === false));
  };

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
  return item.map((item, index) => (
    <div
      className={item.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={item.id} onClick={() => completeItem(item.id)}>
        {item.title}, {item.price}:-, {item.quantity}
      </div>
      <div className="icons">
        <RiDeleteBinLine
          onClick={() => removeTodo(item.id)}
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

