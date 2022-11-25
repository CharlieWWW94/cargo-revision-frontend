import React, { useState, useEffect } from 'react';
import "bulma/css/bulma.min.css";
import FlashcardList from './components/FlashcardList';
import './components/flashcard.css'
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignupPage";
import UserPage from "./pages/UserPage";
import './components/Flashcard'


function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE)
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
          <Route path="/user" element={<UserPage flashcardInfo = {flashcards}/>}></Route>
        </Routes>
    
      </main>
    
    </div>
  );
}


{/* <FlashcardList flashcards={flashcards} /> */}
const SAMPLE = [
  {name: "Physics", info:"Quantum mec- Google"},
  {name: "What makes a plant green?", info: "Chlorophyll, important information to succeed in life"},
  {name: "JavaScript", info: "Javascript is used by web devs"},{name: "Python", info: "My first language that I learned"},
  {name: "algebra", info: "(-b±√(b²-4ac))/(2a)"},
  {name: "irregular shapes", info: "Trapezium, rhombus, parallelagram"}
  
]
export default App;
