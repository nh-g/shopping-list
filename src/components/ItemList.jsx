import React, { useState, useEffect } from "react";
import CreateItemButton from "./CreateItemButton";
import Item from "./Item";
import ItemForm from "./ItemForm";

export default function ItemList() {
  const [todos, setTodos] = useState([]);

  const [isAdding, setIsAdding] = useState(false);
  const toggleAddingItem = () => {
    setIsAdding(!isAdding);
  };

  const addTodo = (todo) => {
    // Type-in verification
    if (!todo.title || /^\s*$/.test(todo.title)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    // toggleAddingItem();
    console.log("Todos", todos);
  };

  const updateTodo = (todoId, newValue) => {
    // Type-in verification
    if (!newValue.title || /^\s*$/.test(newValue.title)) {
      return;
    }
    setTodos((prev) =>
      prev.map((todo) => (todo.id === todoId ? newValue : todo))
    );
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const afterRemoveArray = [...todos].filter((todo) => todo.id !== id);
    setTodos(afterRemoveArray);
  };

  const clearCompleted = () => {
    let cleared = [...todos].filter((todo) => {
      return !todo.isComplete;
    });
    setTodos(cleared);
  };

  const viewCompleted = () => {
    let completedList = [...todos].filter((todo) => {
      return todo.isComplete;
    });
    setTodos(completedList);
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      {/* <ItemForm onSubmit={addTodo} /> */}
      <Item
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        clearCompleted={clearCompleted}
        viewCompleted={viewCompleted}
      />

      {/* Todo: Toggle between Add-button Component to Form*/}
      {/* <button onClick={clearCompleted} className="button">
          Clear Completed
        </button>
        <br />
        <button onClick={viewCompleted} className="button yellow">
          View Completed
        </button> */}

      {!isAdding && (
        <CreateItemButton toggleCreateItemButton={toggleAddingItem} />
      )}
      {isAdding && (
        <ItemForm toggleForm = {toggleAddingItem} onSubmit ={addTodo}/>
      )}
    </div>
  );
}
