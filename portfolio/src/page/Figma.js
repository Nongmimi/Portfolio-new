import React from 'react';
import { useNavigate } from 'react-router-dom';
import './page.css';


function Figma() {
    const navigate = useNavigate(); // ใช้ useNavigate สำหรับการนำทาง

    const goTocom = () => {
        navigate('/computer'); // นำทางไปยังหน้า /menu
    };
    const goToHW = () => {
        navigate('/hardware'); // นำทางไปยังหน้า /menu
    };

    return (
        <div className="figma">
            <div className="ground">
            <div className="header">
                <h1>Figma</h1>
                <i className="fa fa-id-card icon1"></i>
            </div>
            <button className="project-button" onClick={goToHW}>
                    <i className="fa fa-home"></i>
                    Hardware
                </button>
                <button className="project-button" onClick={goTocom}>
                    <i className="fa fa-home"></i>
                    Computer
                </button>
            </div>
        </div>
    );
}

export default Figma;
