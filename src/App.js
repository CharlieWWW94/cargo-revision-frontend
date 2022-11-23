import Icon from "@mdi/react";
import { mdiFerry } from "@mdi/js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello Team Cargo!</h1>
      <Icon path={mdiFerry} size={2} />
    </div>
  );
}

export default App;
