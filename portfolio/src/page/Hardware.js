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
            <button className="cfh-button1" onClick={goTofigma}>
                <div className="left">
                    <i class="fa fa-arrow-circle-left"></i>
                        <span>Figma</span>
                </div> 
            </button>
            <button className="cfh-button2" onClick={goTocom}>
                <div className="right">
                        <span>Computer</span>
                        <i className="fa fa-arrow-circle-right"></i>
                </div>
            </button>
            </div>
        </div>
    );
}

export default Hardware;