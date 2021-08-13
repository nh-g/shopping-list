import { useState, useEffect } from "react";
import "./styles/styles.sass";
import Navigation from "./components/Navigation";
import NormalScreen from "./screens/NormalScreen";
import ItemForm from "./components/ItemForm";
import WelcomeScreen from "./screens/WelcomeScreen";
function App() {
  const [list, setList] = useState([]);

  // loadData
  useEffect(() => {
    const shoppingItems = JSON.parse(
      localStorage.getItem("shopping list' items")
    );
    if (shoppingItems) {
      setList(shoppingItems);
    }
  }, []);

  // saveData
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
      <h1>EIKA shopping list</h1>
      {list.length === 0 ? (
        <WelcomeScreen/>
      ) : (
        <NormalScreen
          list={list}
          removeItem={removeItem}
          completeItem={completeItem}
        />
      )}
      <ItemForm onSubmit={addItem} />
    </div>

  );
}

export default App;
