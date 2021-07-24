import { BrowserRouter } from "react-router-dom";

import "./styles/styles.sass";
import Navigation from "./components/Navigation";
import TodoList from './components/ItemList'
function App() {
  return (
    // remove browserRouter as a single page
    <BrowserRouter>
      <Navigation />
      <div className="todo-app">
        <h1>EIKA shopping list</h1>
        <TodoList />
      </div>
    </BrowserRouter>

    // add toggle between WelcomePage and NormalPage
  );
}

export default App;
