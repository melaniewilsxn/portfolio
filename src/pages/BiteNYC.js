import React from "react";
import WorkSidebar from "../components/WorkSidebar";
import "../styles/Project.css"

function BiteNYC(){
    return (
        <div className="project-container">
            <WorkSidebar />
            <div className="project-content-container">
                <div className="project-title-container">
                    <h1 className="project-title">BiteNYC</h1>
                </div>
                <div className="project-subheader-container">
                    <h2 className="project-subheader">A dynamic single-page application I developed to help food enthusiasts track and share their restaurant experiences across NYC.</h2>
                </div>
                <div className="project-overview-container">
                    <div className="projec-overview-content-container">
                        <h3 className="project-subheader2">ROLE</h3>
                        <p className="project-overview-description">Full-Stack Developer</p>
                    </div>
                    <div className="projec-overview-content-container">
                        <h3 className="project-subheader2">RESPONSIBILITIES</h3>
                        <ul className="project-overview-description">
                            <li>Designing and implementing the user interface</li>
                            <li>Developing the backend using JSON Server and Node.js</li>
                            <li>Ensuring seamless user experience through responsive design</li>
                            <li>Managing data persistence and retrieval</li>
                            <li>Version control using Git</li>
                        </ul>
                    </div>
                    <div className="projec-overview-content-container">
                        <h3 className="project-subheader2">TECHNOLOGIES</h3>
                        <p className="project-overview-description">HTML, CSS, JavaScript, JSON Server, Node.js, Git</p>
                    </div>
                </div>
                <div className="github-button-continer">
                    <button className="github-button"  onClick={() => window.open('https://github.com/melaniewilsxn/phase-1-project', "_blank")}>GITHUB LINK</button>
                </div>
                <div className="project-details-container">
                    <p className="project-content">BiteNYC is a robust single-page application designed to assist food enthusiasts in documenting and sharing their dining experiences throughout New York City. The application offers a user-friendly interface that allows users to add and manage restaurants they have visited, providing an efficient way to keep track of their culinary adventures.</p>
                    <img className="project-image" src={`${process.env.PUBLIC_URL}/BiteNYC/BiteNYC1.png`}/>
                    <h3 className="project-subheader3">FEATURES</h3>
                    <ul className="features-list">
                        <li>Restaurant Logging: Users can easily add new restaurants to their personal list by entering details such as the restaurant's name, rating, an image, neighborhood, and additional comments. This feature ensures that users can comprehensively document their dining experiences.</li>
                        <li>Favorites Management: Users have the option to mark restaurants as favorites. This feature enables users to quickly access their preferred dining spots for future visits, streamlining the process of revisiting favorite places.</li>
                        <li>Dynamic Filtering and Sorting: BiteNYC allows users to filter and sort restaurants by various criteria, including name, rating, and favorites. This functionality helps users efficiently organize and navigate their restaurant lists based on their preferences.</li>
                    </ul>
                    <img className="project-image" src={`${process.env.PUBLIC_URL}/BiteNYC/BiteNYC2.png`}/>
                    <h3 className="project-subheader3">TECHNICAL IMPLEMENTATION</h3>
                    <p className="project-content">BiteNYC is built using a combination of HTML, CSS, and JavaScript. The application leverages the Document Object Model (DOM) to dynamically update the page, ensuring a seamless and responsive user experience. Data management is handled through a db.json file, accessed via JSON Server, which simulates a REST API for data persistence and retrieval.</p>
                    <p className="project-content">Instead of using a frontend framework like React, the UI components are created using vanilla JavaScript. For example, the renderOneRestaurant function dynamically builds and adds restaurant cards to the DOM, enabling users to interact with their restaurant entries directly.</p>
                    <h3 className="project-subheader3">USER EXPERIENCE</h3>
                    <p className="project-content">BiteNYC is designed with simplicity and intuitiveness in mind. The straightforward interface makes it easy for users to add, view, and manage their restaurant entries. The ability to filter and sort restaurants enhances the user experience by providing quick access to relevant information. Overall, BiteNYC aims to offer a practical solution for food enthusiasts to document and revisit their culinary journeys.</p>
                </div>
            </div>
            <div className="line10"></div>
        </div>
    )
}

export default BiteNYC