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
                    <a href= "#skill">Skills</a>
                </li>
            </ul>
            <ul>
                <li onClick= {()=> setMenuOpen(false)}>
                    <a href= "#project">Projects</a>
                </li>
            </ul>
            {/* <ul>
                <li onClick= {()=> setMenuOpen(false)}>
                    <a href= "#testimonial">Testimonial</a>
                </li>
            </ul> */}
            <ul>
                <li onClick= {()=> setMenuOpen(false)}>
                    <a href= "#contact">Contacts</a>
                </li>
            </ul>
            
        </div>
    )
}
