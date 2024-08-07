import React from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import "../styles/About.css"

function About(){
    const navigate = useNavigate()

    return (
        <div className="about-container">
            <Sidebar />
            <div className="line7"></div>
            <div className="line8"></div>
            <div className="about-content">
                <div class="left-column">
                    <h1 className="about-header">ABOUT</h1>
                    <h2 className="about-subheader">Hello, I'm Melanie. Software engineer, website designer and problem solver.</h2>
                    <p className="about-paragraph">I have always been fascinated by the intersection of art and science. Initially, this fascination led me to pursue a career in medicine, as I believed it would allow me to combine my creativity, scientific curiosity, and problem-solving skills. However, I discovered that software engineering was a much better fit for these passions.</p>
                    <p className="about-paragraph">My first exposure to software engineering was during an AP Computer Science class in high school. Although I enjoyed the class, I was set on becoming a doctor at the time. I graduated in 2020 with a B.S. in Psychology and Legal Studies while following the pre-med track. After graduation, I worked on the frontline during the COVID-19 pandemic as a Clinical Informatics Specialist. In the fall of 2021, I decided to further my education by attending Boston University's Master's of Medical Sciences program. It wasn't until I moved to NYC to attend Albert Einstein College of Medicine that I realized my true calling lay elsewhere.</p>
                    <p className="about-paragraph">Reflecting on my positive experience with computer science in high school, I decided to switch fields. A friend recommended Flatiron School's bootcamp, which provided a comprehensive education that set me on the right track. During my time there, I learned to code in various languages, including JavaScript, React, Python, and SQL, and I built a range of websites and APIs.</p>
                    <p className="about-paragraph">Looking ahead, I am eager to deepen my expertise in backend and full-stack development, with a strong focus on algorithmic challenges and AI. I am passionate about solving complex problems and developing scalable, efficient solutions. While I enjoy freelance web design projects, my primary goal is to secure a long-term career where I can apply my skills to drive innovation and make a significant impact across various industries.</p>
                    <h3 className="about-subheader-2">EXPERIENCE</h3>
                    <p className="about-paragraph">
                        - Bachelor's of Science Degree from the University of Wisconsin-Madison<br/>
                        - Master's Degree from Boston University<br/>
                        - Software Engineering Certificate from Flatiron School
                    </p>
                    <p className="about-paragraph">
                        - 3 Years in Research<br/>
                        - 3 Years in Data Analytics<br/>
                        - 1 Year in Clinical Informatics
                    </p>
                    <h3 className="about-subheader-2">SKILLS</h3>
                    <p className="about-paragraph">Backend Development / Full-Stack Development / Project Management / Algorithm Design / Data Structures / Database Management / API Development / Python / JavaScript / React / Redux / Figma / HTML / CSS / SQL / NoSQL Databases / Version Control (Git) / Problem Solving / Data Analysis / Web Design</p>
                    <div className="about-button-container">
                        <button className="about-button"  onClick={() => window.open('https://acrobat.adobe.com/id/urn:aaid:sc:va6c2:86a7697b-a6a6-44e2-82d4-71e61ac95af7', "_blank")}>DOWNLOAD CV</button>
                        <button className="about-button" onClick={() => navigate('/contact')}>CONTACT ME</button>
                    </div>
                </div>
                <div class="right-column">
                    <img className="profile-picture" src={`${process.env.PUBLIC_URL}/melanie-wilson.jpg`}/>
                </div>
            </div>
            <div className="line9"></div>
        </div>
    )
}

export default About