import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
