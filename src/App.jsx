import { BrowserRouter } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import "./styles/styles.sass";
import Navigation from "./components/Navigation";
import NormalScreen from "./screens/NormalScreen";
import ItemForm from "./components/ItemForm";
function App() {
  const [list, setList] = useState([]);

  // const loadData = (storageKey) => {
  //   const data = localStorage.getItem(storageKey)
  //   const parsedData = JSON.parse(data) ?? [];

  //   return parsedData
  // }

  // const saveData = useCallback(
  //   (storageKey, list) => {
  //     const stringifyList = JSON.stringify(list);
  //     localStorage.setItem(storageKey, stringifyList)
  //   },[])

  // useEffect(() => setList(loadData("STORAGE_KEY")), [setList]);
  // useEffect(() => saveData("STORAGE_KEY", list), [saveData, list]);

  useEffect(() => {
    const shoppingItems = JSON.parse(
      localStorage.getItem("shopping list' items")
    );
    if (shoppingItems) {
      setList(shoppingItems);
    }
  }, []);

  useEffect(() => {
    console.log("useEffect list changed", { list });
    localStorage.setItem("shopping list' items", JSON.stringify(list));
  }, [list]);

  const addItem = (item) => {
    // Type-in verification
    if (!item.title || /^\s*$/.test(item.title)) {
      return;
    }
    const newList = [item, ...list];
    console.log("addItem", { list, newList });
    setList(newList);
  };

  // const updateItem = (itemId, newValue) => {
  //   // Type-in verification
  //   if (!newValue.title || /^\s*$/.test(newValue.title)) {
  //     return;
  //   }
  //   setItems((prev) =>
  //     prev.map((item) => (item.id === itemId ? newValue : item))
  //   );
  // };

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
    // setItems(updatedList.filter((item) => item.isComplete === false));
  };


  return (
    <div className="todo-app">
      <Navigation />
      <h1>EIKA shopping list</h1>
      {list.length === 0 ? (
        <span>Welcome Screen</span>
      ) : (
        <NormalScreen
          list={list}
          removeItem={removeItem}
          completeItem={completeItem}
        />
      )}
      <ItemForm onSubmit={addItem} />
    </div>

    // add toggle between WelcomePage and NormalPage
  );
}

export default App;
