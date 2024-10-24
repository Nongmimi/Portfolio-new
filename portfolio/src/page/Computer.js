import React from 'react';
import { useNavigate } from 'react-router-dom';
import './page.css';


function Computer() {
    const navigate = useNavigate(); // ใช้ useNavigate สำหรับการนำทาง

    const goTofigma = () => {
        navigate('/figma'); // นำทางไปยังหน้า /menu
    };
    const goToHW = () => {
        navigate('/hardware'); // นำทางไปยังหน้า /menu
    };

    return (
        <div className="computer">
            <div className="ground">
            <div className="header">
                <h1>Computer</h1>
                <i className="fa fa-id-card icon1"></i>
            </div>

            <div className="cfh-project">
                    <div className="project-1">
                        <div className="project-13">
                            <img src="/images/thebutler.png" alt="thebutler" className="project-img-app3"></img>
                            <div className="project-info3">
                                <h1>The Butler</h1>
                                <p>เป็นการออกแบบตัวเว็บไซต์เกี่ยวกับการจัดการระบบหอพัก</p>
                                <p>เช่น การแจ้งหรือรับข่าวสาร การจ่ายบิล การจองตัวstaff</p>
                                <p>โดยสามารถเข้าใช้งานได้ทั้งเจ้าของหอ staff และผู้เข้าพัก</p>
                                <p>ทำขึ้นเพื่อใช้ส่งงานในวิชาของชั้นปีที่ 3</p>
                                <div className="project-img3">
                                    <img src="/images/thebutler2.png" alt="thebutler" className="img-app3"></img>
                                    <img src="/images/thebutler3.png" alt="thebutler" className="img-app3"></img>
                                    <img src="/images/thebutler4.png" alt="thebutler" className="img-app3"></img>
                                    <img src="/images/thebutler5.png" alt="thebutler" className="img-app3"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <button className="cfh-button1" onClick={goToHW}>
                <div className="left">
                    <i class="fa fa-arrow-circle-left"></i>
                        <span>Hardware</span>
                </div> 
            </button>
            <button className="cfh-button2" onClick={goTofigma}>
                <div className="right">
                        <span>Figma</span>
                        <i className="fa fa-arrow-circle-right"></i>
                </div>
            </button>
        </div>
        </div>
    );
}

export default Computer;