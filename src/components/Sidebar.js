import React from "react";
import "../styles/Sidebar.css"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="copyright-container">
                © 2024
            </div>
            <div className="link-container">
                <a href="/portfolio" className="sidebar-link">HOME</a>
            </div>
        </div>
    );
}

export default Sidebar;