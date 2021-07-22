import { BrowserRouter } from "react-router-dom";

import "./styles/styles.sass";
import Navigation from "./components/Navigation";
import TodoList from './components/TodoList'
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="todo-app">
        <h1>EIKA shopping list</h1>
        <TodoList />
      </div>
    </BrowserRouter>
  );
}

export default App;
