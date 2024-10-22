import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './menu.css';

function Menu() {
    const navigate = useNavigate();

    const goAboutMe = () => {
        navigate('/about-me');
    };
    const goToSkills = () => {
        navigate('/skills');
    };
    const goToEdu = () => {
        navigate('/education');
    };
    const goToProj = () => {
        navigate('/project');
    };

    const [hoveredButton, setHoveredButton] = useState(null);

    const handleMouseEnter = (buttonName) => {
        setHoveredButton(buttonName);
    };

    const handleMouseLeave = () => {
    setHoveredButton(null);
    };

    return (
        <div className="menu">
            <p>INDEX</p>

            <button
                className="menu-button1"
                onClick={goAboutMe}
                onMouseEnter={() => handleMouseEnter('about-me')}
                onMouseLeave={handleMouseLeave}
            >
                About Me
                <i className="fa fa-id-card"></i>
            </button>
            {hoveredButton === 'about-me' && (
                <div className="popup-container1">
                    <span className="popup1">- Bio</span>
                    <span className="popup1">- Hobby</span>
                </div>
            )}

            <button
                className="menu-button2"
                onClick={goToSkills}
                onMouseEnter={() => handleMouseEnter('skills')}
                onMouseLeave={handleMouseLeave}
            >
                Skills
                <i className="fa-solid fa-user-gear"></i>
            </button>
            {hoveredButton === 'skills' && (
                <div className="popup-container2">
                    <span className="popup2">- Soft Skills</span>
                    <span className="popup2">- Hard Skills</span>
                </div>
            )}

            <button
                className="menu-button3"
                onClick={goToEdu}
                onMouseEnter={() => handleMouseEnter('education')}
                onMouseLeave={handleMouseLeave}
            >
                Education
                <i className="fa fa-graduation-cap"></i>
            </button>
            {hoveredButton === 'education' && (
                <div className="popup-container3">
                    <span className="popup3">- GPAX</span>
                    <span className="popup3">- Transcript</span>
                </div>
            )}

            <button
                className="menu-button4"
                onClick={goToProj}
                onMouseEnter={() => handleMouseEnter('projects')}
                onMouseLeave={handleMouseLeave}
            >
                Projects
                <i className="fa fa-solid fa-folder"></i>
            </button>
            {hoveredButton === 'projects' && (
                <div className="popup-container4">
                    <span className="popup4">- Computer</span>
                    <span className="popup4">- Figma</span>
                    <span className="popup4">- Hardware</span>
                </div>
            )}
        </div>
    );
}

export default Menu;
