import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // นำเข้า useNavigate
import './App.css'; 

function Sidebar() {
    const navigate = useNavigate(); // ใช้ useNavigate สำหรับการนำทาง
    const location = useLocation(); // ใช้ useLocation เพื่อดึงข้อมูลเส้นทางปัจจุบัน
    
    const goToHome = () => {
        navigate('/'); // นำทางกลับไปหน้า Index หรือเส้นทาง "/"
    };
    const goToMenu = () => {
      navigate('/menu'); // นำทางไปยังหน้า /menu
    };
    const goToAboutme = () => {
      navigate('/about-me'); // นำทางไปยังหน้า /menu
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

    return (
      <div className="sidebar">
          {location.pathname === "/" ? (
              <>
                  {/* <button className="sidebar-button" onClick={goToHome}>
                      <i className="fa fa-home"></i>
                  </button>
                  <button className="sidebar-button">
                      <h1 className="rotate-text">PORTFOLIO</h1>
                  </button>
                  <button className="sidebar-button">
                      <i className="fa fa-sign-out"></i>
                  </button> */}
              </>
          ) : location.pathname === "/menu" ? (
            <>
                <button className="sidebar-button" onClick={goToMenu}>
                    <i className="fa fa-home"></i>
                </button>
                <button className="sidebar-button">
                    <h1 className="rotate-text">PORTFOLIO</h1>
                </button>
                <button className="sidebar-button" onClick={goToHome}>
                    <i className="fa fa-sign-out"></i>
                </button>
            </>
        ) : ( /*ถ้าไม่ใช่หน้า/ และmenu*/ 
              <>
                  <button className="sidebar-button" onClick={goToMenu}>
                      <i className="fa fa-home"></i>
                  </button>
                  <div className="middle-buttons"> {/* เพิ่ม div เพื่อจัดกลุ่มปุ่มกลาง */}
                    <button className="sidebar-button1">
                      <i className="fa fa-id-card icon" onClick={goToAboutme}></i>
                      <h7 className="rotate-text">About ME</h7>
                    </button>
                    <button className="sidebar-button1">
                      <i class="fa-solid fa-user-gear" onClick={goToSkills}></i>
                      <h7 className="rotate-text">Skills</h7>
                    </button>
                    <button className="sidebar-button1">
                      <i className="fa fa-graduation-cap icon" onClick={goToEdu}></i>
                      <h7 className="rotate-text">Education</h7>
                    </button>
                    <button className="sidebar-button1">
                      <i className="fa fa-solid fa-folder" onClick={goToProj}></i>
                      <h7 className="rotate-text">Projects</h7>
                    </button>
                  </div>
                  <button className="sidebar-button" onClick={goToHome}>
                      <i className="fa fa-sign-out"></i>
                  </button>
              </>
          )}
      </div>
  );
  
}

export default Sidebar;
