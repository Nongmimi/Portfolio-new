import React from 'react';
import './page.css';

function Education() {
    return (
        <div className="education">
            <div className="ground">
            <div className="header">
                <h1>Education</h1>
                <i className="fa fa-id-card icon1"></i>
            </div>
            <div className="education-content">
                <div className="education-content-top">
                    <p><strong className="large-text">Name:</strong> Worawaran Jaiklang</p>
                    <p><strong className="large-text">NickName:</strong> Emmy</p>
                    <p><strong className="large-text">Age:</strong> 21 y.</p>
                    <p><strong className="large-text">Nationality:</strong> Thai</p>
                    <p><strong className="large-text">Phone:</strong> 095-030-5738</p>
                    <p><strong className="large-text1">Email:</strong> worawaran.ejk@gmail.com</p>
                    <p><strong className="large-text1">University:</strong> KMUTNB</p>
                    <p><strong className="large-text1">Major:</strong> Engineer</p>
                </div>
                <div className="education-hobby">
                    Hobby
                </div>
            </div>
            </div>
        </div>
    );
}

export default Education;
