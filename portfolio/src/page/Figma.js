import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './page.css';

function Figma() {
    const navigate = useNavigate(); // ใช้ useNavigate สำหรับการนำทาง
    const [showQRDiaBo, setShowQRDiaBo] = useState(false); // สถานะสำหรับ DiaBo QR
    const [showQRShop, setShowQRShop] = useState(false); // สถานะสำหรับ Shop QR

    const goTocom = () => {
        navigate('/computer'); // นำทางไปยังหน้า /computer
    };

    const goToHW = () => {
        navigate('/hardware'); // นำทางไปยังหน้า /hardware
    };

    const toggleQRDiaBo = () => {
        setShowQRDiaBo(!showQRDiaBo); // เปลี่ยนสถานะของ DiaBo QR
    };

    const toggleQRShop = () => {
        setShowQRShop(!showQRShop); // เปลี่ยนสถานะของ Shop QR
    };

    return (
        <div className="figma">
            <div className="ground">
                <div className="header">
                    <h1>Figma</h1>
                    <i className="fa fa-id-card icon1"></i>
                </div>

                <div className="cfh-project">
                    <div className="project-1">
                        <div className="project-11">
                            <img src="/images/diaboapp.png" alt="Diabo-app" className="project-img-app1" onClick={toggleQRDiaBo}></img>
                            <div className="project-info1">
                                <h1>DiaBo</h1>
                                <p>เป็นการออกแบบหน้า UI </p>
                                <p>สำหรับโมบายแอปพลิเคชัน</p>
                                <p>เกี่ยวกับการดูแลตัวเองในโรคเบาหวาน</p>
                                <p>ทำขึ้นเพื่อใช้เป็นต้นแบบของโปรเจคจบ</p>
                                <span>กดที่รูปภาพ เพื่อสแกนดูตัวอย่าง</span>
                                {showQRDiaBo && (
                                    <div className="qr-code-container">
                                        <img src="/images/Diabo.png" alt="Diabo QR code" className="project-img-qr" />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="project-12">
                            <div className="project-info2">
                                <h1>E-commerce</h1>
                                <p>เป็นการออกแบบหน้า UI</p>
                                <p>สำหรับระบบ E-commerce</p>
                                <p>โดยมีหน้าตะกร้าสินค้าและหน้าที่อยู่จัดส่ง</p>
                                <p>ทำตอนสมัครฝึกงานทางด้าน UX/UI</p>
                                <span>กดที่รูปภาพ เพื่อสแกนดูตัวอย่าง</span>
                                {showQRShop && (
                                    <div className="qr-code-container">
                                        <img src="/images/shopping.png" alt="Shop QR code" className="project-img-qr" />
                                    </div>
                                )}
                            </div>
                            <img src="/images/shop.png" alt="shop-app" className="project-img-app2" onClick={toggleQRShop}></img>
                        </div>
                    </div>
                </div>

                <button className="cfh-button1" onClick={goTocom}>
                    <div className="left">
                        <i className="fa fa-arrow-circle-left"></i>
                        <span>Computer</span>
                    </div>
                </button>
                <button className="cfh-button2" onClick={goToHW}>
                    <div className="right">
                        <span>Hardware</span>
                        <i className="fa fa-arrow-circle-right"></i>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Figma;
