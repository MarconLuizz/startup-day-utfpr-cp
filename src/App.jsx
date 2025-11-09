// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Startups from "./pages/Startups/Startups";
import StartupDetail from "./pages/Startups/StartupDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/startups" element={<Startups />} />
        <Route path="/startups/:slug" element={<StartupDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
