import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import React from 'react';
import { Navbar } from "./components/Navbar";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./lib/utils";
function App() {
    return (React.createElement("div", { className: "flex flex-col overflow-hidden bg-white" },
        React.createElement(Navbar, null),
        React.createElement(ScrollToTop, null),
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
            React.createElement(Route, { path: "/about", element: React.createElement(About, null) }),
            React.createElement(Route, { path: "/projects", element: React.createElement(Projects, null) })),
        React.createElement(Footer, null)));
}
export default App;
