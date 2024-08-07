import React from "react";
import WorkSidebar from "../components/WorkSidebar";
import "../styles/Project.css"

function Trove(){
    return (
        <div className="project-container">
            <WorkSidebar />
            <div className="project-content-container">
                <div className="project-title-container">
                    <h1 className="project-title">Trove</h1>
                </div>
                <div className="project-subheader-container">
                    <h2 className="project-subheader">Empowering readers with a robust platform designed to manage, discover, and share their literary collections, fostering a vibrant community of book enthusiasts.</h2>
                </div>
                <div className="project-overview-container">
                    <div className="projec-overview-content-container">
                        <h3 className="project-subheader2">ROLE</h3>
                        <p className="project-overview-description">Full-Stack Developer</p>
                    </div>
                    <div className="projec-overview-content-container">
                        <h3 className="project-subheader2">RESPONSIBILITIES</h3>
                        <ul className="project-overview-description">
                            <li>Designed and implemented secure user authentication</li>
                            <li>Developed and maintained RESTful APIs with Flask</li>
                            <li>Managed state and application data flow using Redux</li>
                            <li>Built responsive and interactive user interfaces with React</li>
                            <li>Integrated and configured SQLAlchemy for database interactions</li>
                            <li>Set up and managed databases using SQLite and PostgreSQL</li>
                            <li>Implemented book management features including adding, updating, and deleting books</li>
                            <li>Developed genre-based browsing and dynamic personal libraries</li>
                            <li>Ensured data privacy and security with Flask-Bcrypt and secure session management</li>
                            <li>Conducted thorough testing and debugging to ensure smooth user experience</li>
                        </ul>
                    </div>
                    <div className="projec-overview-content-container">
                        <h3 className="project-subheader2">TECHNOLOGIES</h3>
                        <ul className="project-overview-description">
                            <li>Frontend: React, React Router DOM, Semantic UI React, Redux</li>
                            <li>Backend: Python, Flask, Flask-RESTful, Flask-Migrate, Flask-CORS, Flask-Bcrypt</li>
                            <li>Database: SQLAlchemy, SQLite, PostgreSQL</li>
                        </ul>
                    </div>
                </div>
                <div className="github-button-continer">
                    <button className="github-button"  onClick={() => window.open('https://github.com/melaniewilsxn/trove-redux', "_blank")}>GITHUB LINK</button><br/>
                    <button className="url-button"  onClick={() => window.open('https://trove-redux.onrender.com/', "_blank")}>URL</button>
                </div>
                <div className="project-details-container">
                    <p className="project-content">Trove is a comprehensive book management application designed to empower book enthusiasts to curate and manage their personal libraries effortlessly. With a focus on user experience and community features, Trove offers a robust platform for users to engage with their literary collections and connect with fellow readers.</p>
                    <img className="project-image" src={`${process.env.PUBLIC_URL}/Trove/Trove1.png`}/>
                    <h3 className="project-subheader3">FEATURES</h3>
                    <ul className="features-list">
                        <li>User Authentication: Ensure the privacy and security of your literary collection with Trove's secure account creation and login system.</li>
                        <li>Book Management: Add new books to the Trove database, and update or remove entries as your collection evolves. Each book can be meticulously cataloged with details including title, author, and genre.</li>
                        <li>Browse by Genre: Discover new books by browsing through an organized and extensive genre-based classification, making it easy to find books that match your reading preferences.</li>
                        <li>Personal Libraries: Create and customize your own libraries within Trove. Add books to different collections based on themes, reading status, or any other personal criteria.</li>
                        <li>Review System: Engage with the Trove community by writing reviews for books you've read. Edit or delete your reviews to keep your opinions up-to-date as your perspectives change.</li>
                        <li>Dynamic Interaction: Users can add or remove books from their libraries, providing a dynamic and interactive experience as their reading habits and preferences evolve.</li>
                    </ul>
                    <img className="project-image" src={`${process.env.PUBLIC_URL}/Trove/Trove2.png`}/>
                    <h3 className="project-subheader3">TECHNICAL IMPLEMENTATION</h3>
                    <p className="project-content">Trove is built using React for the front end and Flask for the back end. The application leverages Redux for state management and SQLAlchemy for database interactions, supporting both SQLite and PostgreSQL databases. The front end utilizes Semantic UI React for a responsive and aesthetically pleasing interface, while the back end employs Flask-RESTful to create robust RESTful APIs. The application also incorporates Flask-Bcrypt for secure user authentication and Flask-Migrate for database migrations.</p>
                    <h3 className="project-subheader3">USER EXPERIENCE</h3>
                    <p className="project-content">Trove is designed to offer an engaging and seamless user experience. Users can effortlessly browse and manage their book collections, explore new genres, and share their thoughts through reviews. The responsive design ensures accessibility across various devices, making it easy for users to interact with their collections anytime, anywhere. With features like dynamic filtering and sorting, users can efficiently organize their libraries and discover new books based on their preferences. Trove aims to provide a holistic and enjoyable platform for book enthusiasts to enhance their reading journey.</p>
                    <p><img className="project-image" src={`${process.env.PUBLIC_URL}/Trove/Trove3.png`}/></p>
                    <p><img className="project-image" src={`${process.env.PUBLIC_URL}/Trove/Trove4.png`}/></p>
                </div>
            </div>
            <div className="line10"></div>
        </div>
    )
}

export default Trove