import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import React, { useState } from 'react'
import { Navbar } from "./components/Navbar"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"


function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App