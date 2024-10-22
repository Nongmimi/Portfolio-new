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
                    <i className="fa-solid fa-user-gear icon1"></i>
                </div>
                <div className="skills-content">
                    <div className={`flipper ${flippedSoftSkills ? 'flipped' : ''}`} onClick={handleSoftSkillsClick}>
                        <div className="front">
                            <p>Soft Skills</p>
                        </div>
                        <div className="back">
                            <div className='one'>
                                <img src="/images/time.png" alt="time" className="skill-img"/>
                                <p className='back-text'>Time Management</p>
                                <img src="/images/emotional-intelligence.png" alt="emotion" className="skill-img"/>
                                <p className='back-text'>Emotional Intelligence</p>
                                <img src="/images/adaptability.png" alt="adaptability" className="skill-img"/>
                                <p className='back-text'>Adaptability</p>
                            </div>
                            <div className='two'>
                                <img src="/images/partners.png" alt="partners" className="skill-img"/>
                                <p className='back-text'>Team work</p>
                                <img src="/images/talking.png" alt="talking" className="skill-img"/>
                                <p className='back-text'>Communication</p>
                                <img src="/images/presentation.png" alt="presentation" className="skill-img"/>
                                <p className='back-text'>presentation</p>
                            </div>
                        </div>
                    </div>
                    <div className={`flipper ${flippedHardSkills ? 'flipped' : ''}`} onClick={handleHardSkillsClick}>
                        <div className="front">
                            <p>Hard Skills</p>
                        </div>
                        <div className="back1">
                            <p className='back-text1'>Computer Language Skills</p>
                            <div className='one1'>
                                <img src="/images/css-3.png" alt="css-3" className="skill-img1"/>
                                <img src="/images/html-5.png" alt="html-5" className="skill-img1"/>
                                <img src="/images/python.png" alt="python" className="skill-img1"/>
                                <img src="/images/java.png" alt="java" className="skill-img1"/>
                            </div>
                            <p className='back-text1'>Computer Application Skills</p>
                            <div className='two2'>
                                <img src="/images/office365.png" alt="office365" className="skill-img1"/>
                                <img src="/images/office.png" alt="office" className="skill-img1"/>
                                <img src="/images/vscode.png" alt="vscode" className="skill-img1"/>
                                <img src="/images/figma.png" alt="figma" className="skill-img1"/>
                            </div>
                            <p className='back-text1'>Language Skills</p>
                            <div className='three3'>
                                <img src="/images/thailand.png" alt="thailand" className="skill-img1"/>
                                <img src="/images/united-kingdom.png" alt="uk" className="skill-img1"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
