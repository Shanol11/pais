import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import "../styles/Quality.css";
import { useNavigate } from "react-router-dom";
function Quality() {
    const [zoomedIndex, setZoomedIndex] = useState(null);
    const navigate = useNavigate();

    const handleImageClick = (index) => {
        setZoomedIndex(zoomedIndex === index ? null : index);
        
    };

    return (
        <div className="about-container">
            {/* Left Side Content */}
            <div className="about-content-wrapper">
                <div className="about-text">
                    <h1>A Quality-Driven Catering Company</h1>
                    <p>
                    We are a trusted name in the catering industry, known for delivering exceptional services. Our team has successfully executed events of all sizes, meeting client expectations with precision. Whether you require indoor or outdoor catering, we ensure a seamless experience tailored to your needs.
                    </p>
                    <button className="menu-box" onClick={() => navigate("/wedding")}>
                        <span>OUR MENU</span>
                        <div className="arrow-circle">
                            <FaArrowRight className="arrow-icon" />
                        </div>
                    </button>
                </div>

                {/* Right Side Image */}
                <div className="about-image">
                    <img
                        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRpnwWwO4yF65-eeygJe2BBhDgFFl5v_dtoKxvVdA8nuxc6OeQyHTU9IKSjr3pv61-149ErbFIuQzx224-EanL_Jg"
                        alt="Catering"
                    />
                </div>
            </div>

            {/* Centered Headings */}
            <div className="centered-headings">
                <h2>Always Quality</h2>
                <h1>Our Team</h1>
            </div>

            {/* Two Image Boxes with Toggle Effect */}
            <div className="team-images">
                {[
                    {
                        src: "https://i.pinimg.com/736x/85/68/db/8568dbfa104f635bce9f65b699918388.jpg",
                        name: "PROP. J.GURUMURTHY",
                        title: "FOUNDER",
                        degree: "B.SC., M.B.A., M.T.M., M.Phil., Ph.D[p].",
                    },
                    {
                        src: "https://i.pinimg.com/474x/08/87/70/088770aa5e1392661ed8976fbc91f747.jpg",
                        name: "RUDHRESH GK",
                        title: "CEO",
                        degree: "B.E",
                    },
                ].map((member, index) => (
                    <div
                        key={index}
                        className={`team-card ${zoomedIndex === index ? "zoomed" : ""}`}
                        onClick={() => handleImageClick(index)}
                    >
                        <img src={member.src} alt={member.name} />
                        <div className="team-info">
                            <span className="badge">{member.title}</span>
                            <h3>{member.name}</h3>
                            <p>{member.degree}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Quality;