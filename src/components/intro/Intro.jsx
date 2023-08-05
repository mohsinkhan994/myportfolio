import "./intro.scss";
import { init} from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            backDelay:1500,
            backSpeed:60,
            showCursor:true,
            strings: [ "React" , "Java", "Node"],

        });
       
    }, []);

    return (
        <div className = "intro" id ="intro"> 
        <div className="left">
            <div className="imgContainer">
                <img src= "assets/me.jpeg" alt = ""/>
            </div>
        </div>
        <div className="right">
            <div className="wrapper">
                <h2>Hi There, I'm </h2>
                <h1>Mohsin Khan</h1>
                <h3>Software Developer - <span ref={textRef}></span></h3>
            </div>
            <a href="#portfolio">
                <img src= "assets/down.png" alt=""/>
            </a>
            </div>            
        </div>
    )
}
