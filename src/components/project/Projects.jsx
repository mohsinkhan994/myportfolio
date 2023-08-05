import "./project.scss";
import { useState } from "react";

export default function Projects() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [{
        id: "1",
        img: "https://purepng.com/public/uploads/large/purepng.com-john-deere-logologobrand-logoiconslogos-251519940792ghsgu.png",
        projectName: "Project- Base Station Manager",
        projectDescription: "This project is of John Deere,which is an American corporation that manufactures agricultural machinery, heavy equipment, forestry machinery, diesel engines, drivetrains used in heavy equipment, and lawn care equipment",
        technology: "Technical Plateform used- Java,Springboot,React,Node",
        duration: "Period- Working on it from 28th novemeber 2022 till present."

    },

    {
        id: "2",
        img: "https://mma.prnewswire.com/media/562209/ALLISON_TRANSMISSION_INC__LOGO.jpg?p=publish",
        projectName: "Project- Extranet Admin",
        projectDescription: "This project is of Allison Transmission, which is an American manufacturer of commerical automatic transmission and hybrid propulsion systems.",
        technology: "Technical Plateform used- Java,Springboot 1.5, TFS, React,HTML, CSS, Tomcat,Maven and Hibernate.",
        duration: "Period- Working on it from 5th January 2020 till November 25, 2022."

    },
    {
        id: "3",
        img: "assets/app.png",
        projectName: "Project- Library Management System",
        projectDescription: "This is centralized online library management system,where a student can easily search and issue the books available in college library.",
        technology: "Technical Plateform used- Spring MVC, JSP, Javascript, HTML,CSS.",
        duration: "Period- Made during my Post Graduation Diploma in Advanced Computing course."
    }]

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 1) :
            setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }

    return (
        <div className="project" id="project">
            <div className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imageContainer">
                                        <img src={d.img} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <h1>{d.projectName}</h1>
                                <p>{d.projectDescription}</p>
                                <p>{d.technology}</p>
                                <p>{d.duration}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick()} />
        </div>
    )
}
