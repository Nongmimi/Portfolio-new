import React from 'react';
import './App.css'; 

function Header() {
    return (
      <div className="header">
        <button className="header-button">
          <i className="fas fa-home"></i> {/* Home icon */}
        </button>
        <button className="header-button">
          PORTFOLIO
        </button>
        <button className="header-button">
          <i className="fas fa-sign-out-alt"></i> {/* Exit icon */}
        </button>
      </div>
    );
  }

export default Header;