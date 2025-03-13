import { useState } from 'react'
import "tailwindcss";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Contact from "./Contact";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;