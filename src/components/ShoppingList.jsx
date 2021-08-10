import React, { useState, useEffect } from "react";
import CreateItemButton from "./CreateItemButton";
import Item from "./Item";
import ItemForm from "./ItemForm";

export default function ShoppingList({ shoppingListItems }) {
  const [items, setItems] = useState(shoppingListItems);
  useEffect(() => {
      console.log("ShoppingList", { shoppingListItems, items });
      setItems(shoppingListItems);
  }, [shoppingListItems]);
  // const addItem = (item) => {
  //   // Type-in verification
  //   if (!item.title || /^\s*$/.test(item.title)) {
  //     return;
  //   }
  //   const newList = [item, ...items];
  //   setItems(newList);
  // };

  const updateItem = (itemId, newValue) => {
    // Type-in verification
    if (!newValue.title || /^\s*$/.test(newValue.title)) {
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  // const completeItem = (id) => {
  //   let updatedList = items.map((item) => {
  //     if (item.id === id) {
  //       item.isComplete = !item.isComplete;
  //     }
  //     return item;
  //   });
  //   console.log("ITEMS", updatedList);
  //   setItems(updatedList)
  //   // setItems(updatedList.filter((item) => item.isComplete === false));
  // };

  const removeItem = (id) => {
    const afterRemoveArray = [...items].filter((item) => item.id !== id);
    setItems(afterRemoveArray);
  };

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
      <Item
        listItem={items}
        setItems={setItems}
        // completeTodo={completeItem}
        removeTodo={removeItem}
        updateTodo={updateItem}
        // clearCompleted={clearCompletedItems}
        // viewCompleted={viewCompletedItems}
      />
      {/* <ItemForm onSubmit={addItem} /> */}
    </div>
  );
}
