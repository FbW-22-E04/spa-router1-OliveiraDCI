import Me from "./pages/Me";
import Hobbies from "./pages/Hobbies";
import Contact from "./pages/Contact";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import NotFound from "./pages/NotFound";

// import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Me />} />
        <Route path="/Me" element={<Me />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
