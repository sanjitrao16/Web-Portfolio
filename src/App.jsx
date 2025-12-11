import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Project from "./components/Project.jsx";
import Skills from "./components/Skills.jsx";
import Achievements from "./components/Achievements.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Project />
        <Achievements />
        <ContactUs />
        <Footer />
      </Router>
    </>
  );
}

export default App;
