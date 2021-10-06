// Project files
import "./styles/styles.sass";
import Navigation from "./components/Navigation";
import NormalScreen from "./screens/NormalScreen";
import AddNewItem from "./components/AddNewItem";
import WelcomeScreen from "./screens/WelcomeScreen";
import { useList } from "./state/ListProvider";

export default function App() {
  // Global state
  const { list } = useList();

  return (
    <div className="App">
      <Navigation />

      <main>
        {list.length === 0 ? <WelcomeScreen /> : <NormalScreen />}
      </main>

      <AddNewItem/>
    </div>
  );
}
