import React, { useState } from 'react';
import './page.css';

function Skills() {
    const [flippedSoftSkills, setFlippedSoftSkills] = useState(false); // สถานะสำหรับการพลิก Soft Skills
    const [flippedHardSkills, setFlippedHardSkills] = useState(false); // สถานะสำหรับการพลิก Hard Skills

    const handleSoftSkillsClick = () => {
        setFlippedSoftSkills(!flippedSoftSkills); // เปลี่ยนสถานะพลิกเมื่อคลิก Soft Skills
    };

    const handleHardSkillsClick = () => {
        setFlippedHardSkills(!flippedHardSkills); // เปลี่ยนสถานะพลิกเมื่อคลิก Hard Skills
    };

    return (
        <div className="skills">
            <div className="ground">
                <div className="header">
                    <h1>Skills</h1>
                    <i className="fa fa-id-card icon1"></i>
                </div>
                <div className="skills-content">
                    <div className={`flipper ${flippedSoftSkills ? 'flipped' : ''}`} onClick={handleSoftSkillsClick}>
                        <div className="front">
                            <p>Soft Skills</p>
                        </div>
                        <div className="back">
                            <p>cccc</p>
                        </div>
                    </div>
                    <div className={`flipper ${flippedHardSkills ? 'flipped' : ''}`} onClick={handleHardSkillsClick}>
                        <div className="front">
                            <p>Hard Skills</p>
                        </div>
                        <div className="back">
                            <p>dddd</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
