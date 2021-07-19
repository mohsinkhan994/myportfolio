import "./menu.scss"

export default function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className = {"menu "  + (menuOpen && "active") }>
            <ul>
                <li onClick= {()=> setMenuOpen(false)}>
                    <a href= "#intro">Home</a>
                </li>
            </ul>
            <ul>
                <li onClick= {()=> setMenuOpen(false)}>
                    <a href= "#portfolio">Portfolio</a>
                </li>
            </ul>
            <ul>
                <li onClick= {()=> setMenuOpen(false)}>
                    <a href= "#work">Works</a>
                </li>
            </ul>
            <ul>
                <li onClick= {()=> setMenuOpen(false)}>
                    <a href= "#testimonial">Testimonial</a>
                </li>
            </ul>
            <ul>
                <li onClick= {()=> setMenuOpen(false)}>
                    <a href= "#contact">Contacts</a>
                </li>
            </ul>
            
        </div>
    )
}
