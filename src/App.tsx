import { useState, useEffect } from "react";
import "./App.css";
import LoginSection from "./Components/signin/LoginSection";
import SignupSection from "./Components/signup/SignupSection";
import { Routes, Route, Link } from "react-router-dom";
import SplashScreen from "./Components/SpashScreen/SplashScreen";
import Home from "./Components/home/Home";
import BuyProf from "./Components/buyProfile/BuyProf";
import SearchPage from "./Components/searchPage/SearchPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginSection />} />
        <Route path="/signup" element={<SignupSection />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/buy" element={<BuyProf/>} />
        <Route path="/home/buy/search" element={<SearchPage/>} />
      </Routes>
    </div>
  );
}

export default App;
