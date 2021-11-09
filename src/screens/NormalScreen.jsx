// NPM Packages
import { useState } from "react";

// Project files
import { useList } from "../state/ListProvider";
import SortControl from "../components/SortControl";
import ShowAcquiredToggler from "../components/ShowAcquiredToggler";
import ShoppingList from "../components/ShoppingList";

export default function NormalScreen() {
  // Global state
  const { list } = useList();

  // Local state
  const [showCompletedList, setShowCompletedList] = useState(false);
  const toggleShow = () => setShowCompletedList(!showCompletedList);

  // Constants
  const inactiveList = list.filter((item) => item.isComplete === true);
  const activeList = list.filter((item) => item.isComplete === false);

  // Methods
  // function removeItem(id) {
  //   const afterRemoveArray = [...list].filter((item) => item.id !== id);
  //   setList(afterRemoveArray);
  // }

  return (
    <div>
      <h2>EIKA shopping list</h2>
      <div className="toolbar">
        <ShowAcquiredToggler
          showCompleted={showCompletedList}
          toggleShow={toggleShow}
        />
        <SortControl/>
      </div>

      {showCompletedList ? 
        <ShoppingList Items={inactiveList}/>
      : <ShoppingList Items={activeList}/>
      }
    </div>
  );
}
