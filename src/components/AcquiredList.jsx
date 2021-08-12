import React, { useState, useEffect } from "react";
import AcquiredItem from "./AcquiredItem";

export default function AcquiredList({
  shoppingListItems,
  removeItem,
  completeItem,
}) {
  // const [items, setItems] = useState(shoppingListItems);
  // useEffect(() => {
  //     console.log("ShoppingList", { shoppingListItems, items });
  //     setItems(shoppingListItems);
  // }, [shoppingListItems]);

  // const updateItem = (itemId, newValue) => {
  //   // Type-in verification
  //   if (!newValue.title || /^\s*$/.test(newValue.title)) {
  //     return;
  //   }
  //   setItems((prev) =>
  //     prev.map((item) => (item.id === itemId ? newValue : item))
  //   );
  // };

  // const removeItem = (id) => {
  //   const afterRemoveArray = [...items].filter((item) => item.id !== id);
  //   setItems(afterRemoveArray);
  // };

  // const clearCompletedItems = () => {
  //   let cleared = [...items].filter((todo) => {
  //     return !todo.isComplete;
  //   });
  //   setItems(cleared);
  // };

  // const viewCompletedItems = () => {
  //   let completedList = [...items].filter((todo) => {
  //     return todo.isComplete;
  //   });
  //   setItems(completedList);
  // };

  return (
    <div>
      {/* <ItemForm onSubmit={addTodo} /> */}
      <AcquiredItem
        acquiredItem={shoppingListItems}
        completeItem={completeItem}
        removeItem={removeItem}
        // updateTodo={updateItem}
        // clearCompleted={clearCompletedItems}
        // viewCompleted={viewCompletedItems}
      />
    </div>
  );
}
