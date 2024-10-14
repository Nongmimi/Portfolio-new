import React from 'react';
import './App.css';
import Menu from './page/menu';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutMe from './page/AboutMe';
import Sidebar from './Sidebar';

function App() {
  return (
    <Router>
      <div className="main-container">
        <Sidebar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Menu/>} />
            <Route path="/about-me" element={<AboutMe/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
