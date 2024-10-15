import React from 'react';
import { useNavigate } from 'react-router-dom';
import './page.css';

function Projects() {
    const navigate = useNavigate(); // ใช้ useNavigate สำหรับการนำทาง

    const goTofigma = () => {
        navigate('/figma'); // นำทางไปยังหน้า /menu
    };
    const goTocom = () => {
        navigate('/computer'); // นำทางไปยังหน้า /menu
    };
    const goToHW = () => {
        navigate('/hardware'); // นำทางไปยังหน้า /menu
    };

    return (
        <div className="project">
            <div className="ground">
            <div className="header">
                <h1>Projects</h1>
                <i className="fa fa-id-card icon1"></i>
            </div>
            <div className="project-content">
                <div className="project-content-top">
                    <button className="project-button" onClick={goTocom}>
                        <i className="fa fa-home"></i>
                        Computer
                    </button>
                    <button className="project-button" onClick={goTofigma}>
                        <i className="fa fa-sign-out"></i>
                        Figma
                    </button>
                </div>
                <button className="project-button" onClick={goToHW}>
                    <i className="fa fa-home"></i>
                    Hardware
                </button>
            </div>
            </div>
        </div>
    );
}

export default Projects;
