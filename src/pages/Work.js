import React from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import "../styles/Work.css"

function Work(){
    const navigate = useNavigate()

    return (
        <div className="work-container">
            <Sidebar />
            <div className="line4"></div>
            <div className="line5"></div>
            <div className="work-content-container">
                <div className="work-header-container">
                    <p className="name">WORK</p>
                    <p className="description">
                        This is a showcase of my best work in software engineering, full-stack development, and user-friendly design. Driven by a passion for solving complex problems and creating efficient, scalable solutions, my journey in the tech industry has been both challenging and rewarding.
                    </p>
                    <p className="description">
                        I continuously strive to expand my skill set and adapt to the ever-evolving landscape of technology. Each project here represents my dedication to learning, growth, and excellence in software development.
                    </p>
                </div>
                <div className="divider2"></div>
                <nav className="work-nav-container">
                    <div className="work-nav-link" onClick={() => navigate('/bitenyc')}>BiteNYC</div>
                    <p className="work-nav-link-description">- Single-page JavaScript application</p>
                    <div className="work-nav-link" onClick={() => navigate('/cogni')}>Cogni</div>
                    <p className="work-nav-link-description">- Single-page React application</p>
                    <div className="work-nav-link" onClick={() => navigate('/pennywise')}>PennyWise</div>
                    <p className="work-nav-link-description">- Command-line application</p>
                    <div className="work-nav-link" onClick={() => navigate('/trove')}>Trove</div>
                    <p className="work-nav-link-description">- Full-stack application</p>
                </nav>
            </div>
            <div className="line6"></div>
        </div>
    )
}

export default Work