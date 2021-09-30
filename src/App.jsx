//npm packages
import { useState, useEffect } from "react";

//local project files
import "./styles/styles.sass";
import Navigation from "./components/Navigation";
import NormalScreen from "./screens/NormalScreen";
import AddNewItem from "./components/AddNewItem";
import WelcomeScreen from "./screens/WelcomeScreen";
import SortControl from "./components/SortControl";

export default function App() {
  const [list, setList] = useState([]);
  const STORAGE_KEY = "eika shopping list";

  // loadData
  useEffect(() => {
    const shoppingItems = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (shoppingItems) {
      setList(shoppingItems);
    }
  }, []);

  // saveData
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }, [list]);
  
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
      <main>
        {list.length === 0 ? (
          <WelcomeScreen />
        ) : (
          <>
            <SortControl list={list} setList={setList} />
            <NormalScreen
              list={list}
              removeItem={removeItem}
              completeItem={completeItem}
            />
          </>
        )}
        <br />
      </main>
      <AddNewItem list={list} setList={setList} />
    </div>
  );
}
