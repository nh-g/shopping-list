// NPM Packages
import { createContext, useContext, useEffect, useReducer } from "react";

// Project files
import listReducer from "./listReducer";

// Properties
const ListContext = createContext(null);

export function ListProvider(props) {
  const STORAGE_KEY = "eika-shopping-list";
  // Global state
  const [list, dispatch] = useReducer(listReducer, loadList(STORAGE_KEY));

  // Methods
  useEffect(() => saveList(STORAGE_KEY, list), [list]);

  const contextValue = { list, dispatch };

  return (
    <ListContext.Provider value={contextValue}>
      {props.children}
    </ListContext.Provider>
  );
}

export function useList() {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("useList must be used within a ListProvider.");
  }
  return context;
}

function loadList(key) {
  return JSON.parse(localStorage.getItem(key)) ?? [];
}

function saveList(key, list) {
  localStorage.setItem(key, JSON.stringify(list));
}
