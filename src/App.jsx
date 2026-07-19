
import "./app.scss";
import {useState} from "react";
import Portfolio from "./components/portfolio/Portfolio";


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    
    <div className="app">
        <Portfolio/>

    </div>
  );
}

export default App;
