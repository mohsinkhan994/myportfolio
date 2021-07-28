import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Projects from "./components/project/Projects";
import Contacts from "./components/contacts/Contacts";
import Menu from "./components/menu/Menu";
import "./app.scss";
import {useState} from "react";
import  Particles from "react-particles-js";


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    
    <div className="app">
      <Particles className="particlesCanvas"
      params={{
        "particles": {
            "line_linked": {
                        "color":"#FFFFFF"
                        },
            "number": {
                "value": 50
            },
            "size": {
                "value": 5
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                }
            }
        }
    }}
    style={{
            width: '100%',
            background: `#000000` ,
            

     }}
      />
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Skills/>
       <Projects/>
       <Contacts/>
     </div>
    </div>
  );
}

export default App;
