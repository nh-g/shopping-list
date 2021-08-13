import { useState, useEffect } from "react";
import "./styles/styles.sass";
import Navigation from "./components/Navigation";
import NormalScreen from "./screens/NormalScreen";
import ItemForm from "./components/ItemForm";
import WelcomeScreen from "./screens/WelcomeScreen";
import { valueValidation } from "./javaScripts/valueValidation";
import { sortByString, sortByNumber } from "./javaScripts/list-sorter";
import SortControl from "./components/SortControl";
function App() {
  const [list, setList] = useState([]);
  const STORAGE_KEY = "eika shopping list";
  const [activeSort, setActiveSort] = useState("");
  function sortListByName(list, key) {
    const sortedList = sortByString(list, key);
    setActiveSort("name");
    setList(sortedList);
  }

  function sortListByPrice(list, key) {
    const sortedList = sortByNumber(list, key);
    setActiveSort("price");
    setList(sortedList);
  }

  // loadData
  useEffect(() => {
    const shoppingItems = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (shoppingItems) {
      setList(shoppingItems);
    }
  }, []);

  // saveData
  useEffect(() => {
    console.log("useEffect list changed", { list });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }, [list]);

  const addItem = (item) => {
    // Type-in verification
    const validationErrors = valueValidation(item.name, item.price, item.quantity)
    const isValid = Object.keys(validationErrors).length === 0;

    if (isValid){
      const newList = [item, ...list];
      console.log("addItem", { list, newList });
      setList(newList);
    }else{
      alert(
        "Please enter valid values. Name and Price fields are required. Price and Quantity fields only contain digits 0 to 9."
      );
    }
  };

  const removeItem = (id) => {
    const afterRemoveArray = [...list].filter((item) => item.id !== id);
    setList(afterRemoveArray);
  };

  const completeItem = (id) => {
    let updatedList = list.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    setList(updatedList);
  };

  return (
    <div className="App">
      <Navigation />
      <h2>EIKA shopping list</h2>
      <ItemForm onSubmit={addItem} />

      {list.length === 0 ? (
        <WelcomeScreen />
      ) : (
        <>
          <SortControl
            list={list}
            activeSort={activeSort}
            sortListByName={sortListByName}
            sortListByPrice={sortListByPrice}
          />
          <NormalScreen
            list={list}
            removeItem={removeItem}
            completeItem={completeItem}
          />
        </>
      )}
    </div>
  );
}

export default App;
