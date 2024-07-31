import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Home.css';
import HomeSideBar from '../components/HomeSidebar';

function Home(){
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <HomeSideBar />
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="home-content-container">
                <div className="home-header-container">
                    <p className="name">MELANIE WILSON</p>
                    <p className="title">
                        Software Engineer || Backend Developer || Algorithm Specialist
                    </p>
                    <p className="description">
                        Seeking a long-term career in algorithm-driven roles, specializing in backend or full-stack development. Eager to explore opportunities across various industries with a strong interest in AI. Passionate about addressing complex challenges and developing scalable applications.
                    </p>
                    <p className="description">
                        Open to freelance web design, but dedicated to a permanent position in backend or algorithmic development.
                    </p>
                </div>
                <div className="divider"></div>
                <nav className="home-nav-container">
                    <div className="home-nav-link" onClick={() => navigate('/work')}>WORK</div>
                    <div className="home-nav-link" onClick={() => navigate('/about')}>ABOUT</div>
                    <div className="home-nav-link" onClick={() => navigate('/contact')}>CONTACT</div>
                </nav>
            </div>
            <div className="line4"></div>
        </div>
    )
}

export default Home