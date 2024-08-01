import React from "react";
import WorkSidebar from "../components/WorkSidebar";
import "../styles/Project.css"

function PennyWise(){
    return (
        <div className="project-container">
            <WorkSidebar />
            <div className="project-content-container">
                <div className="project-title-container">
                    <h1 className="project-title">PennyWise</h1>
                </div>
                <div className="project-subheader-container">
                    <h2 className="project-subheader">A simple yet powerful command-line application designed to help individuals efficiently manage and track their expenses.</h2>
                </div>
                <div className="project-overview-container">
                    <div className="projec-overview-content-container">
                        <h3 className="project-subheader2">ROLE</h3>
                        <p className="project-overview-description">Back-End Developer</p>
                    </div>
                    <div className="projec-overview-content-container">
                        <h3 className="project-subheader2">RESPONSIBILITIES</h3>
                        <ul className="project-overview-description">
                            <li>Designing and implementing the user authentication system using bcrypt for secure password hashing</li>
                            <li>Developing the CLI for user interaction with intuitive and clear commands</li>
                            <li>Implementing the expense management system including add, view, update, and delete functionalities</li>
                            <li>Creating a category customization feature to allow users to tailor their expense categories</li>
                            <li>Managing data storage and retrieval using SQLite</li>
                            <li>Ensuring seamless and user-friendly experience through efficient command-line interactions</li>
                        </ul>
                    </div>
                    <div className="projec-overview-content-container">
                        <h3 className="project-subheader2">TECHNOLOGIES</h3>
                        <p className="project-overview-description">Python, SQLite, Command Line Interface, bcrypt, datetime</p>
                    </div>
                </div>
                <div className="github-button-continer">
                    <button className="github-button"  onClick={() => window.open('https://github.com/melaniewilsxn/phase-3-final-project', "_blank")}>GITHUB LINK</button>
                </div>
                <div className="project-details-container">
                    <p className="project-content">PennyWise is a robust command-line application designed to help individuals manage and track their expenses efficiently. The application provides an intuitive text-based interface, enabling users to easily record, view, and organize their financial transactions with minimal effort.</p>
                    <img className="pennywise-image" src={`${process.env.PUBLIC_URL}/PennyWise/PennyWise1.png`}/>
                    <h3 className="project-subheader3">FEATURES</h3>
                    <ul className="features-list">
                        <li>User Authentication: Secure login functionality ensures that each user's financial data is kept private and safe.</li>
                        <li>Expense Management: Users can add new expenses, specifying details such as the date, amount, category, and description.</li>
                        <li>View Expenses: The application allows users to view their recorded expenses, filtered by date, category, or description, offering a clear understanding of their spending patterns.</li>
                        <li>Update and Delete Options: Users have the flexibility to modify or remove their expenses, enabling them to keep their financial records accurate and up-to-date.</li>
                        <li>Category Customization: The application includes the ability to manage expense categories, allowing users to tailor the categories to their specific needs.</li>
                    </ul>
                    <img className="pennywise-image" src={`${process.env.PUBLIC_URL}/PennyWise/PennyWise2.png`}/>
                    <h3 className="project-subheader3">TECHNICAL IMPLEMENTATION</h3>
                    <p className="project-content">PennyWise is built using Python, leveraging SQLite for data storage and retrieval. User authentication is handled with bcrypt for secure password hashing, and datetime is used for managing date-related functionalities. The CLI provides a straightforward and efficient interface for user interactions.</p>
                    <h3 className="project-subheader3">USER EXPERIENCE</h3>
                    <p className="project-content">PennyWise is designed to make personal finance management accessible and hassle-free, especially for those who value simplicity and efficiency. The command-line interface is easy to navigate, making it perfect for users who prefer a quick, keyboard-only approach to manage their finances.</p>
                    <p><img className="pennywise-image" src={`${process.env.PUBLIC_URL}/PennyWise/PennyWise3.png`}/></p>
                    <p><img className="pennywise-image" src={`${process.env.PUBLIC_URL}/PennyWise/PennyWise4.png`}/></p>
                </div>
            </div>
            <div className="line10"></div>
        </div>
    )
}

export default PennyWise