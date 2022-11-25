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
  {
    id:1,
    question: "What is 2+2?",
    answer: "4",
    options: [
      '2',
      '3',
      '4',
      '5'
    ]
  },
  {
    id:2,
    question: "What is your date of birth?",
    answer: "21",
    options: [
      '21',
      '31',
      '4',
      '5'
    ]
  },
  {
    id:3,
    question: "What is your hobby?",
    answer: "writing",
    options: [
      'reading',
      'writing',
      'cooking',
      'screaming'
    ]
  }


]
export default App;
