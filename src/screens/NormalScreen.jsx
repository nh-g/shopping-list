import { useState } from "react";
import ShowAcquiredToggler from "../components/ShowAcquiredToggler";
import ShoppingList from "../components/ShoppingList";

export default function NormalScreen({ list, setList}) {
  const [showCompletedList, setShowCompletedList] = useState(false);
  const toggleShow = () => setShowCompletedList(!showCompletedList);

  const inactiveList = list.filter((item) => item.isComplete === true);
  const activeList = list.filter((item) => item.isComplete === false);

  // Methods
  function editList(editedItem) {
    const index = list.findIndex((item) => item.id === editedItem.id);
    const clonedList = [...list];

    clonedList[index] = editedItem;
    setList(clonedList);
  }

  function removeItem(id) {
    const afterRemoveArray = [...list].filter((item) => item.id !== id);
    setList (afterRemoveArray);
  }

  return (
    <div>
      {/* active items */}
      <ShoppingList
        shoppingListItems={activeList}
        editList={editList} 
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
          editList={editList} 
          removeItem={removeItem}
        />
      )}
    </div>
  );
}
