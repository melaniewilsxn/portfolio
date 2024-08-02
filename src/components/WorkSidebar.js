import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/WorkSidebar.css"

function WorkSidebar() {
    const navigate = useNavigate()
    
    return (
        <div className="work-sidebar">
            <div className="work-copyright-container">
                © 2024
            </div>
            <div className="work-sidebar-line-container">
                <div className="work-sidebar-line"></div>
            </div>
            <div className="work-link-container">
                <div className="work-sidebar-link" onClick={() => navigate('/work')}>WORK</div>
            </div>
        </div>
    );
}

export default WorkSidebar;