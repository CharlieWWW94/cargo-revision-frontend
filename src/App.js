import Icon from "@mdi/react";
import "bulma/css/bulma.min.css";
import { mdiFerry } from "@mdi/js";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <h1>Hello Team Cargo!</h1>
        <Icon path={mdiFerry} size={2} />
      </main>
    </div>
  );
}

export default App;
