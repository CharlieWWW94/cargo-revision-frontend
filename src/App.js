import Icon from "@mdi/react";
import "bulma/css/bulma.min.css";
import { mdiFerry } from "@mdi/js";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignupPage";
import UserPage from "./pages/UserPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    console.log(loggedIn);
  }, [setLoggedIn]);

  function manageLogIn(val, username) {
    console.log(val);
    console.log(username);
    setUsername(username);
    setLoggedIn(val);
  }

  return (
    <div className="App">
      <header>
        <Navbar loginState={loggedIn} username={username} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={<LoginPage login={manageLogIn} />}
          ></Route>
          <Route
            path="/sign-up"
            element={<SignUpPage login={manageLogIn} />}
          ></Route>
          <Route path="/user" element={<UserPage />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
