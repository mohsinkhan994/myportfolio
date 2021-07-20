import "./project.scss"

export default function Projects() {
    return (
        <div className = "project" id="project"> 
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
        <div className="leftContainer">
            <div className="imageContainer">
                <img src= "https://mma.prnewswire.com/media/562209/ALLISON_TRANSMISSION_INC__LOGO.jpg?p=publish" alt=""></img>
            </div>
            {/* <h2>Allison Transmission</h2>
            <div className="imgContainer1">
                <img src ="https://mma.prnewswire.com/media/562209/ALLISON_TRANSMISSION_INC__LOGO.jpg?p=publish" alt=""/>
       </div> */}
             </div>
                        </div>
                        <div className="right">
                            {/* <h1>Allison Transmission</h1> */}
                            <h1>Project- Extranet Admin</h1>
                            <p>This project is of Allison Transmission, which is an American manufacturer of commerical automatic transmission and hybrid propulsion systems.
                            </p>
                            <p>Technical Plateform used- Java,Springboot 1.5, TFS, React,HTML, CSS, Tomcat,Maven and Hibernate.</p>
                            <p>Period- 5th January 2020 to present.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
