import React from "react";
import WorkSidebar from "../components/WorkSidebar";
import "../styles/Project.css"

function Cogni(){
    return (
        <div className="project-container">
            <WorkSidebar />
            <div className="project-content-container">
                <div className="project-title-container">
                    <h1 className="project-title">Cogni</h1>
                </div>
                <div className="project-subheader-container">
                    <h2 className="project-subheader">Experience an engaging single-page application designed to provide personalized tutoring services and enhance academic excellence.</h2>
                </div>
                <div className="project-overview-container">
                    <div className="projec-overview-content-container">
                        <h3 className="project-subheader2">ROLE</h3>
                        <p className="project-overview-description">Front-End Developer</p>
                    </div>
                    <div className="projec-overview-content-container">
                        <h3 className="project-subheader2">RESPONSIBILITIES</h3>
                        <ul className="project-overview-description">
                            <li>Designing and implementing the user interface using React</li>
                            <li>Developing client-side routing with React Router for seamless navigation</li>
                            <li>Creating dynamic tutor profiles and filtering functionalities</li>
                            <li>Implementing testimonial submission and management system</li>
                            <li>Ensuring a responsive and visually appealing user interface</li>
                            <li>Managing version control using Git</li>
                        </ul>
                    </div>
                    <div className="projec-overview-content-container">
                        <h3 className="project-subheader2">TECHNOLOGIES</h3>
                        <p className="project-overview-description">React, React Router, HTML, CSS, JavaScript, Node.js, Semantic-UI, Git</p>
                    </div>
                </div>
                <div className="github-button-continer">
                    <button className="github-button"  onClick={() => window.open('https://github.com/melaniewilsxn/cogni-app-final-frontend', "_blank")}>GITHUB LINK</button>
                </div>
                <div className="project-details-container">
                    <p className="project-content">Cogni is a dynamic single-page application built with Create React App that incorporates client-side routing to provide a seamless user experience. The Cogni application allows users to explore a tutoring company, offering personalized tutoring services to help students achieve academic excellence.</p>
                    <img className="project-image" src={`${process.env.PUBLIC_URL}/Cogni/Cogni1.png`}/>
                    <h3 className="project-subheader3">FEATURES</h3>
                    <ul className="features-list">
                        <li>User-friendly Navigation: Users can easily navigate through the different pages of the Cogni App, including Home, About, Tutors, Contact, and Testimonials. This feature ensures a seamless exploration of the platform.</li>
                        <li>Tutor Exploration and Filtering: Users can browse and explore the available tutors in the Meet Our Tutors section. The app allows users to filter tutors based on the subjects they specialize in, ensuring a personalized tutoring experience.</li>
                        <li>Testimonial Submission: Cogni App empowers users to share their own testimonials about their experience with the tutors and the platform. Users can submit their testimonials through a simple and intuitive interface, contributing to the community's feedback and helping others make informed decisions.</li>
                        <li>Dynamic Tutor Profiles: Each tutor has a detailed profile that showcases their expertise and personality. Users can view these profiles to gain insights into the tutors before making their selection.</li>
                        <li>Contact and Inquiry: The Contact page provides users with a convenient way to get in touch with the Cogni team. Users can reach out for inquiries, support, or any other questions they may have. The contact form ensures a smooth and efficient communication channel.</li>
                        <li>Responsive and Engaging Interface: Cogni App offers a responsive and visually appealing interface that enhances the user experience. The platform aims to provide an engaging and enjoyable learning environment for students, making their tutoring journey seamless and productive.</li>
                    </ul>
                    <img className="project-image" src={`${process.env.PUBLIC_URL}/Cogni/Cogni2.png`}/>
                    <h3 className="project-subheader3">TECHNICAL IMPLEMENTATION</h3>
                    <p className="project-content">Cogni is built using React and React Router for client-side routing. The application’s user interface is designed with HTML, CSS, and JavaScript to ensure responsiveness and visual appeal. Git is used for version control to manage code changes and collaboration.</p>
                    <h3 className="project-subheader3">USER EXPERIENCE</h3>
                    <p className="project-content">Cogni is designed to provide a comprehensive and user-centric tutoring platform that caters to the unique needs of every student. The application features easy navigation, dynamic tutor profiles, and a responsive design that ensures a seamless user experience across different devices. Users can explore the platform, filter and select tutors, submit testimonials, and communicate with the Cogni team efficiently.</p>
                    <p><img className="project-image" src={`${process.env.PUBLIC_URL}/Cogni/Cogni3.png`}/></p>
                    <p><img className="project-image" src={`${process.env.PUBLIC_URL}/Cogni/Cogni4.png`}/></p>
                    <p><img className="project-image" src={`${process.env.PUBLIC_URL}/Cogni/Cogni5.png`}/></p>
                </div>
            </div>
            <div className="line10"></div>
        </div>
    )
}

export default Cogni