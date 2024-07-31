import React from "react";
import '../styles/HomeSidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="copyright-container">
                © 2024
            </div>
            <div className="link-container">
                <a href="https://github.com/melaniewilsxn/" className="sidebar-link" target="_blank" rel="noopener noreferrer">GITHUB</a>
                <a href="https://www.linkedin.com/in/melanie-marie-wilson/" className="sidebar-link" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            </div>
        </div>
    );
}

export default Sidebar;