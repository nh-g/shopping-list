// there are unused imports
import React, { useState, useEffect } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Item({ listItem, completeItem, removeItem }) {
  const { id, name, price, isComplete, quantity } = listItem; // nice use of destructuring

  return (
    <tr
      className={isComplete ? "shopping-item complete" : "shopping-item"}
      key={id}
    >
      <td>
        <input type="checkbox" key={id} onClick={() => completeItem(id)} />
      </td>
      <td className="name">{name}</td>
      <td className="quantity">
        {quantity}
        {quantity ? " pc" : ""}
      </td>
      <td className="price">{price}:-</td>
      <td>
        <RiDeleteBinLine
          onClick={() => removeItem(id)}
          className="delete-icon"
          style={{ color: "salmon" }}
        />
      </td>
    </tr>
  );
}
