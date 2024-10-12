import React from 'react';
import './App.css'; 

function Header() {
    return (
      <div className="header">
        <button className="header-button">
          <i className="fa fa-home"></i>
        </button>
        <button className="header-button">
          PORTFOLIO
        </button>
        <button className="header-button">
          <i className="fa fa-sign-out-alt"></i>
        </button>
      </div>
    );
  }

export default Header;