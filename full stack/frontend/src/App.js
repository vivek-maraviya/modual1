import React from "react";
import { Routes, Route } from "react-router-dom";

import Register from "./Pages/Registration";
import Home from "./Pages/Home";
import Header from "./Header";



function App() {
  return (
    <Routes>

      <Route path="/" element={<Header />} />
      <Route path="/Register" element={<Register />} />

      

    </Routes>
    
  );
}

export default App;

