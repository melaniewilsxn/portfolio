import React from "react";
import '../styles/HomeSidebar.css';

function HomeSidebar() {
    return (
        <div className="home-sidebar">
            <div className="home-copyright-container">
                © 2024
            </div>
            <div className="home-link-container">
                <a href="https://github.com/melaniewilsxn/" className="home-sidebar-link" target="_blank" rel="noopener noreferrer">GITHUB</a>
                <a href="https://www.linkedin.com/in/melanie-marie-wilson/" className="home-sidebar-link" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            </div>
        </div>
    );
}

export default HomeSidebar;