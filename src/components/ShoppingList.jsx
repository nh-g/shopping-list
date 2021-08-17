import React, { useState, useEffect } from "react";
import Item from "./Item";

export default function ShoppingList({
  shoppingListItems,
  removeItem,
  completeItem,
}) {
  const List = shoppingListItems.map((item) => (
    <Item
      key={item.id}
      listItem={item}
      completeItem={completeItem}
      removeItem={removeItem}
    />
  ));

  return (
    <section className="shopping-list">
      {shoppingListItems.length > 0 ? List : <p>No item to show...</p>}
    </section>
  );
}
