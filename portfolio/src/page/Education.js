import React, { useState } from 'react';
import './page.css';

function Education() {

    const [flippedTrans, setFlippedTrans] = useState(false); // สถานะสำหรับการพลิก Soft Skills

    const handleTransClick = () => {
        setFlippedTrans(!flippedTrans); // เปลี่ยนสถานะพลิกเมื่อคลิก Soft Skills
    };

    return (
        <div className="education">
            <div className="ground">
            <div className="header">
                <h1>Education</h1>
                <i className="fa fa-graduation-cap icon1"></i>
            </div>
            <div className="education-content">
                <div className='img-edu'>
                    <img src="/images/kmutnb.png" alt="kmutnb" className="school"/>
                    <span className='school-text'><strong><i class="fa-solid fa-location-dot"></i> Bangkok</strong></span>
                    <img src="/images/ปรินส์.png" alt="ปรินส์" className="school"/>
                    <span className='school-text_'><strong><i class="fa-solid fa-location-dot"></i> Chiang Mai</strong></span>
                </div>
                <div className='text-edu'>
                    <div className='school-text01'>2021 - present
                        <span className='school-text1'><strong>King Mongkut's University of Technology North Bangkok</strong></span>
                        <span className='school-text101'>Bachelor of Engineering</span>
                        <span className='school-text101'>Electronics Engineering Technology</span>
                        <span className='school-text101'>Major Subject : Computer</span>
                        <span className='school-text101'><strong>GPAX : 3.24</strong></span>
                    </div>
                    <div className='school-text10'>2018 - 2020
                        <span className='school-text11'><strong>The Prince Royal's College</strong></span>
                        <span className='school-text111'>Sciences Program</span>
                        <span className='school-text111'>Science & Mathematics Excellence Program (SMEP)</span>
                        <span className='school-text111'><strong>GPAX : 3.07</strong></span>
                    </div>
                </div>
                <div className={`flipper_ ${flippedTrans ? 'flipped_' : ''}`} onClick={handleTransClick}>
                    <div className='photo-tran-front'>
                        <img src="/images/tran1.jpg" alt="transcript" className="transcript"/>
                    </div>
                    <div className='photo-tran-back'>
                        <img src="/images/tran2.jpg" alt="transcript" className="transcript"/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Education;
