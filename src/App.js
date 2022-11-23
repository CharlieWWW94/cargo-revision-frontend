import Icon from "@mdi/react";
import "bulma/css/bulma.min.css";
import { mdiFerry } from "@mdi/js";
import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignupPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
          <Route path="/user" element={<UserPage />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
