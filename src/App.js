import { BrowserRouter } from "react-router-dom";

import "./styles/styles.sass";
import Navigation from "./components/Navigation";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <h1>EIKA shopping list</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
