import React from 'react';
import { useNavigate } from 'react-router-dom';
import './menu.css';

function Menu() {
    const navigate = useNavigate(); // ใช้ useNavigate สำหรับการนำทาง
    
    const goAboutMe = () => {
        navigate('/about-me'); // นำทางกลับไปหน้า Index หรือเส้นทาง "/"
    };

    return (
        <div className="menu">
            <h1>INDEX</h1>
                <button className="menu-button" onClick={goAboutMe}>
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
    );
}

export default Menu;
