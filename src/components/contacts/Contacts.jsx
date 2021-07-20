import "./contacts.scss"
import { useState } from "react";

export default function Contacts() {

    const [message, setMessage] = useState(false);

    const handlesubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className = "contact" id= "contact">
            <div className="left">
                <img src= "assets/shake.svg" alt=""/>
            </div>
            <div className="right">
                <h2>Contact Me</h2>
                <form onSubmit={handlesubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder= "Message"></textarea>
                    <button type="submit">Send</button>

                    {message && <span>Thank You... I will respond you soon...</span>}
                </form>
            </div>
            
        </div>
    )
}
