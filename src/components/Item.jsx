import React, { useState, useEffect } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
export default function Item({ listItem, completeItem, removeItem }) {
  const { id, name, price, isComplete, quantity } = listItem;

  return (
    <>
      <article
        className={isComplete ? "shopping-item complete" : "shopping-item"}
        key={id}
      >
        <div>
          <label>
            <input type="checkbox" key={id} onClick={() => completeItem(id)} />
          </label>
          <span>{name}</span>{" "}
          <span className="quantity">
            {quantity}
            {quantity ? "pc" : ""}
          </span>
        </div>

        <div className="icons">
          <span className="price">{price}:-</span>
          <RiDeleteBinLine
            onClick={() => removeItem(id)}
            className="delete-icon"
            style={{ color: "salmon" }}
          />
        </div>
      </article>
    </>
  );
}
