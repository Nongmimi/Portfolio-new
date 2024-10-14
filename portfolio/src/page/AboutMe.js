import React from 'react';
import './page.css';

function AboutMe() {
    return (
        <div className="about-me">
            <div className="about-me-header">
                <h1>About Me</h1>
                <i className="fa fa-id-card about-me-icon"></i>
            </div>
            <div className="about-me-content">
                <div className="about-me-content-top">
                    <p><strong className="large-text">Name:</strong> Worawaran Jaiklang</p>
                    <p><strong className="large-text">NickName:</strong> Emmy</p>
                    <p><strong className="large-text">Age:</strong> 21 y.</p>
                    <p><strong className="large-text">Nationality:</strong> Thai</p>
                    <p><strong className="large-text">Phone:</strong> 095-030-5738</p>
                    <p><strong className="large-text1">Email:</strong> worawaran.ejk@gmail.com</p>
                    <p><strong className="large-text1">University:</strong> KMUTNB</p>
                    <p><strong className="large-text1">Major:</strong> Engineer</p>
                </div>
                <div className="about-me-hobby">
                    Hobby
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
