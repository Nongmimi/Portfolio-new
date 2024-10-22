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
                <i className="fa fa-solid fa-folder icon1"></i>
            </div>
            <div className="project-content">
                <div className="project-content-top">
                    <button className="project-button" onClick={goTocom}>
                        <i class="fa fa-laptop"></i>
                        Computer
                    </button>
                    <button className="project-button" onClick={goTofigma}>
                        <i class="fa-brands fa-figma"></i>
                        Figma
                    </button>
                </div>
                <div className="project-content-bottom">
                <button className="project-button" onClick={goToHW}>
                    <i className="fa-solid fa-microchip"></i>
                    Hardware
                </button>
                </div>
                
            </div>
            </div>
        </div>
    );
}

export default Projects;
