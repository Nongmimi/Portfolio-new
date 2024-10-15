import React from 'react';
import './App.css';
import Menu from './page/menu';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import AboutMe from './page/AboutMe';
import Sidebar from './Sidebar';
import Skills from './page/Skills';
import Education from './page/Education';
import Projects from './page/Projects';
import Figma from './page/Figma';
import Computer from './page/Computer';
import Hardware from './page/Hardware';

function App() {
  const navigate = useNavigate(); // ใช้ useNavigate สำหรับการนำทาง

  const goToMenu = () => {
    navigate('/menu'); // นำทางไปยังหน้า /menu
  };

  return (
    <div className="main-container">
      <div className="content">
        <h1>PORTFOLIO</h1>
        <button onClick={goToMenu}>next</button> {/* เมื่อกดปุ่ม จะไปยังหน้า /menu */}
      </div>
    </div>
  );
}

export default function MainApp() {
  return (
    <Router>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/about-me" element={<AboutMe/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path='/education' element={<Education/>} />
        <Route path='/project' element={<Projects/>} />
        <Route path='/figma' element={<Figma/>} />
        <Route path='/hardware' element={<Hardware/>} />
        <Route path='/computer' element={<Computer/>} />
      </Routes>
    </Router>
  );
}
