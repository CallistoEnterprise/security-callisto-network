import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/audited-projects" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
