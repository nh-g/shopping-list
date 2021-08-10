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
      localStorage.setItem("shopping list' items", JSON.stringify(list));
    }, [list]);

    const addItem = (item) => {
      // Type-in verification
      if (!item.title || /^\s*$/.test(item.title)) {
        return;
      }
      const newList = [item, ...list];
      setList(newList);
    };

  return (
    <div className="todo-app">
      <Navigation />
      <h1>EIKA shopping list</h1>
      {list.length === 0 ? (
        <span>Welcome Screen</span>
      ) : (
        <NormalScreen list={list} />
      )}
      <ItemForm onSubmit={addItem} />
    </div>

    // add toggle between WelcomePage and NormalPage
  );
}

export default App;
