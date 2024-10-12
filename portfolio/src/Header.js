import React from 'react';
import './App.css'; 

function Sidebar() {
    return (
      <div className="sidebar">
        <button className="sidebar-button">
          <i className="fa fa-home"></i>
        </button>
        <button className="sidebar-button">
          PORTFOLIO
        </button>
        <button className="sidebar-button">
          <i className="fa fa-sign-out"></i>
        </button>
      </div>
    );
  }

export default Sidebar;