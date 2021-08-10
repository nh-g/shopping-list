import React, { useState, useEffect } from "react";
import CreateItemButton from "../components/CreateItemButton";
import ShoppingList from "../components/ShoppingList";
import SortControl from "../components/SortControl";
import ItemForm from "../components/ItemForm";

export default function NormalScreen({ list }) {
  // const [shoppingList, setShoppingList] = useState(list);
  // console.log("NormalScreen state", { shoppingList, list });
  const inactiveList = list.filter((item) => item.isComplete === true);
  const activeList = list.filter((item) => item.isComplete === false);

  return (
    <div>
      {/* <SortControl list={items} setList={setItems} /> */}
      <ShoppingList shoppingListItems={activeList} />
    </div>
  );
}
