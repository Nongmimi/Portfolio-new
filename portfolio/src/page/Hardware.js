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
                <i className="fa-solid fa-microchip icon1"></i>
            </div>

            <div className="cfh-project">
                    <div className="project-1">
                        <div className="project-14">
                            <div className="project-15">
                                <img src="/images/2.png" alt="hardware" className="img-app4"></img>
                                <p>Counter</p>
                            </div>
                            <div className="project-16">
                                <img src="/images/หม้อแปลง.png" alt="hardware" className="img-app5"></img>
                                <p>หม้อแปลง</p>
                            </div>
                        </div>
                    </div>
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