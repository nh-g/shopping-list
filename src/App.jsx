// Npm packages
import { useState, useEffect } from "react";

// Project files
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
  
  return (
    <div className="App">
      <Navigation />
      <h2>EIKA shopping list</h2>
      <main>
        {list.length === 0 ? (
          <WelcomeScreen />
        ) : (
          <>
            <NormalScreen
              list={list}
              setList ={setList}
            />
          </>
        )}
        <br />
      </main>
      <AddNewItem list={list} setList={setList} />
    </div>
  );
}
