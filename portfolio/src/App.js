import React from 'react';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <Header/>
      <div className="content">
        <h1 className="title">PORTFOLIO</h1>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <button className="header-button">
        <i className="fas fa-home"></i> {/* Home icon */}
      </button>
      <div className="flex-grow"></div> {/* สำหรับจัดตำแหน่ง */}
      <button className="header-button">
        <i className="fas fa-sign-out-alt"></i> {/* Exit icon */}
      </button>
    </div>
  );
}

export default App;
