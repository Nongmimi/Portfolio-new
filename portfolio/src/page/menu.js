import React from 'react';
import './menu.css';

function Menu() {
    return (
        <div className="menu">
            <h1>INDEX</h1>
            <div className="menu-button-container">
                <button className="menu-button">
                    About ME
                    <i className="fa fa-id-card"></i>
                </button>
                <button className="menu-button">
                    Bio
                    <i className="fa fa-address-book"></i>
                </button>
                <button className="menu-button">
                    Education
                    <i className="fa fa-graduation-cap"></i>
                </button>
                <button className="menu-button">
                    Projects
                    <i className="fa fa-file"></i>
                </button>
            </div>
        </div>
    );
}

export default Menu;
