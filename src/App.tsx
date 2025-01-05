import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import React, { useState } from 'react'
import { Navbar } from "./components/Navbar"
import Projects from "./pages/Projects"
import Footer from "./components/Footer"
import ScrollToTop from "./lib/utils"


function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App