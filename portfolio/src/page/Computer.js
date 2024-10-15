import React from 'react';
import { useNavigate } from 'react-router-dom';
import './page.css';


function Computer() {
    const navigate = useNavigate(); // ใช้ useNavigate สำหรับการนำทาง

    const goTofigma = () => {
        navigate('/figma'); // นำทางไปยังหน้า /menu
    };
    const goToHW = () => {
        navigate('/hardware'); // นำทางไปยังหน้า /menu
    };

    return (
        <div className="computer">
            <div className="ground">
            <div className="header">
                <h1>Computer</h1>
                <i className="fa fa-id-card icon1"></i>
            </div>
            <button className="project-button" onClick={goToHW}>
                    <i className="fa fa-home"></i>
                    Hardware
                </button>
                <button className="project-button" onClick={goTofigma}>
                    <i className="fa fa-home"></i>
                    Figma
                </button>
            </div>
        </div>
    );
}

export default Computer;