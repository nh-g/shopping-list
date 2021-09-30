import React, { useState } from "react";
import ShowAcquiredToggler from "../components/ShowAcquiredToggler";
import ShoppingList from "../components/ShoppingList";
import SortControl from "../components/SortControl";

export default function NormalScreen({ list, removeItem, completeItem }) {
  const [showCompletedList, setShowCompletedList] = useState(false);
  const toggleShow = () => setShowCompletedList(!showCompletedList);

  const inactiveList = list.filter((item) => item.isComplete === true);
  const activeList = list.filter((item) => item.isComplete === false);

  return (
    <div>
      {/* active items */}
      <ShoppingList
        shoppingListItems={activeList}
        completeItem={completeItem}
        removeItem={removeItem}
      />
      {/* acquired items */}
      <ShowAcquiredToggler
        showCompleted={showCompletedList}
        toggleShow={toggleShow}
      />
      {showCompletedList && (
        <ShoppingList
          shoppingListItems={inactiveList}
          completeItem={completeItem}
          removeItem={removeItem}
        />
      )}
    </div>
  );
}
