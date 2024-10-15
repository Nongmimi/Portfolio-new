import React from 'react';
import { useNavigate } from 'react-router-dom';
import './page.css';


function Hardware() {
    const navigate = useNavigate(); // ใช้ useNavigate สำหรับการนำทาง

    const goTofigma = () => {
        navigate('/figma'); // นำทางไปยังหน้า /menu
    };
    const goTocom = () => {
        navigate('/computer'); // นำทางไปยังหน้า /menu
    };

    return (
        <div className="hardware">
            <div className="ground">
            <div className="header">
                <h1>Hardware</h1>
                <i className="fa fa-id-card icon1"></i>
            </div>
                <button className="project-button" onClick={goTocom}>
                    <i className="fa fa-home"></i>
                    Computer
                </button>
                <button className="project-button" onClick={goTofigma}>
                    <i className="fa fa-home"></i>
                    Figma
                </button>
            </div>
        </div>
    );
}

export default Hardware;