import React, { useState, useEffect } from "react";
import CreateItemButton from "../components/CreateItemButton";
import ShoppingList from "../components/ShoppingList";
import SortControl from "../components/SortControl";
import ItemForm from "../components/ItemForm";
import CompletedList from "../components/CompletedList";
import Item from "../components/Item";
import AcquiredItem from "../components/AcquiredItem";
import AcquiredList from "../components/AcquiredList";

export default function NormalScreen({ list, removeItem, completeItem }) {
  const [showCompletedList, setShowCompletedList] = useState(false);
  console.log("NormalScreen SHOW", { showCompletedList});
  const toggleShow = () => setShowCompletedList(!showCompletedList);


  // const [shoppingList, setShoppingList] = useState(list);
  // console.log("NormalScreen state", { shoppingList, list });
  const inactiveList = list.filter((item) => item.isComplete === true);
  const activeList = list.filter((item) => item.isComplete === false);

  return (
    <div>
      {/* <SortControl list={list} /> */}
      {/* active items */}
      <ShoppingList
        shoppingListItems={activeList}
        removeItem={removeItem}
        completeItem={completeItem}
      />
      {/* acquired items */}
      <CompletedList
        showCompleted={showCompletedList}
        toggleShow={toggleShow}
      />
      {showCompletedList && (
        <AcquiredList
          shoppingListItems={inactiveList}
          removeItem={removeItem}
          completeItem={completeItem}
        />
      )}
    </div>
  );
}
