import React from "react";
import "../styles/WorkSidebar.css"

function WorkSidebar() {
    return (
        <div className="work-sidebar">
            <div className="work-copyright-container">
                © 2024
            </div>
            <div className="work-sidebar-line-container">
                <div className="work-sidebar-line"></div>
            </div>
            <div className="work-link-container">
                <a href="/portfolio/work" className="work-sidebar-link">WORK</a>
            </div>
        </div>
    );
}

export default WorkSidebar;