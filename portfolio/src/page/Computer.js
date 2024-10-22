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
            <button className="cfh-button1" onClick={goToHW}>
                <div className="left">
                    <i class="fa fa-arrow-circle-left"></i>
                        <span>Hardware</span>
                </div> 
            </button>
            <button className="cfh-button2" onClick={goTofigma}>
                <div className="right">
                        <span>Figma</span>
                        <i className="fa fa-arrow-circle-right"></i>
                </div>
            </button>
        </div>
        </div>
    );
}

export default Computer;