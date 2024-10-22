import React from 'react';
import './page.css';

function AboutMe() {
    return (
        <div className="about-me">
            <div className="ground">
            <div className="header">
                <h1>About Me</h1>
                <i className="fa fa-id-card icon1"></i>
            </div>

            <div className="about-me-content">
                <div className="about-me-top">
                    <img src="/images/angel.png" alt="angel" className="icon-top"/>
                    <div className="about-me-top-text">
                        <span className='text1'>
                            <span class="thai">บัตรประจำตัวประชากรนางฟ้า</span> 
                            <span class="english">Angle National ID Card</span>
                        </span>
                        <span className='text2'>
                            <span class="id-label">Identification Number</span>
                            <span class="id-number">XY-1234-5678-900</span>
                        </span>
                    </div>
                </div>

                <div className="about-me-info">
                    <div className='barcode-me'>
                        em.wnmi
                    </div>
                    <div className='text-info'>
                        <p className="text-1">ชื่อตัวและชื่อสกุล</p>
                        <p className="text-21">วรวลัญช์ ใจกลาง</p>
                    </div>
                    <div className='line-info'>
                        <div className='text-info'>
                            <p className="text-1">Name</p>
                            <p className="text-21">Worawaran</p>
                        </div>
                        <div className='text-info'>
                            <p className="text-1">Last Name</p>
                            <p className="text-21">Jaiklang</p>
                        </div>
                    </div>
                    <div className='line-info'>
                        <div className='text-info'>
                            <p className="text-1">Date of Birth</p>
                            <p className="text-2">05 Apr 2003</p>
                        </div>
                        <div className='text-info'>
                            <p className="text-1">Age</p>
                            <p className="text-2">21 y.</p>
                        </div>
                    </div>
                    <div className='text-info'>
                        <p className="text-1">University</p>
                        <p className="text-2">King Mongkut's University of Technology North Bangkok</p>
                    </div>
                    <div className='text-info'>
                        <p className="text-1">Major</p>
                        <p className="text-2">Engineer</p>
                    </div>  
                    <div className='line-info'>
                        <div className='text-info'>
                            <p className="text-1">Email</p>
                            <p className="text-2">worawaran.ejk@gmail.com</p>
                        </div>
                        <div className='text-info'>
                            <p className="text-1">Phone</p>
                            <p className="text-2">095-0305738</p>
                        </div> 
                    </div>
                    <div className='photo-me'>
                        <img src="/images/meme.jpg" alt="me" className="profile-me"/>
                    </div>
                </div>

                <div className="about-me-hobby">
                    <div className='text-1'>Hobby</div>
                        <div className="hobby-icon">
                            <img src="/images/karaoke.png" alt="karaoke" className="hobby"/>
                            <img src="/images/listening.png" alt="listening" className="hobby"/>
                            <img src="/images/mobile-game.png" alt="game" className="hobby"/>
                            <img src="/images/watching-a-movie.png" alt="movie" className="hobby"/>
                            <img src="/images/pet-lover.png" alt="pet-lover" className="hobby"/>
                            <img src="/images/camera.png" alt="camera" className="hobby"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutMe;
