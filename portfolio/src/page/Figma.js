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
            <button className="cfh-button1" onClick={goTocom}>
                <div className="left">
                    <i class="fa fa-arrow-circle-left"></i>
                        <span>Computer</span>
                </div> 
            </button>
            <button className="cfh-button2" onClick={goToHW}>
                <div className="right">
                        <span>Hardware</span>
                        <i className="fa fa-arrow-circle-right"></i>
                </div>
            </button>
            </div>
        </div>
    );
}

export default Figma;
