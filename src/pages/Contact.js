import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Contact.css"

function Contact(){
    return (
        <div className="contact-container">
            <Sidebar />
            <div className="line4"></div>
            <div className="line5"></div>
            <div className="contact-content-container">
                <div className="contact-content">
                    <h1 className="contact-title">Let's get in touch...</h1>
                    <p className="contact-description">Have an opportunity or just want to say hi? I'd love <br /> to hear from you!</p>
                    <p className="contact-online">
                        Email: <a href="mailto:melanieimwilson1@gmail.com">melanieimwilson1@gmail.com</a><br />
                        Online: <a href="https://www.linkedin.com/in/melanie-marie-wilson/" target="_blank" rel="noopener noreferrer">LinkedIn</a> /
                        <a href="https://github.com/melaniewilsxn" target="_blank" rel="noopener noreferrer"> GitHub</a> /
                        <a href="https://www.instagram.com/melaniewilsxn/" target="_blank" rel="noopener noreferrer"> Instagram</a>
                    </p>
                </div>
            </div>
            <div className="line6"></div>
        </div>
    )
}

export default Contact