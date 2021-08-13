import React, { useState, useEffect } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
export default function Item({
  listItem,
  completeItem,
  removeItem,
}) {
  
  const { id, title, price, isComplete, quantity } = listItem
  
  return (

    <article
      className={isComplete ? "todo-row complete" : "todo-row"}
      key={id}
    >
      <label>
        <input
          type="checkbox"
          key={id}
          onClick={() => completeItem(id)}
        />
        <span>
          {" "}
          {title}, {price}:-, {quantity}
        </span>
      </label>
      <div className="icons">
        <RiDeleteBinLine
          onClick={() => removeItem(id)}
          className="delete-icon"
        />
      </div>
    </article>
  );
}
