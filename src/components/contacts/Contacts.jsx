import "./contacts.scss"
import { useEffect, useState } from "react";
import List from "../List/List";
import {
    socialNetworks,

} from "../../data";

export default function Contacts() {

    const [selected, setSelected] = useState();
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(socialNetworks);
    }, [selected]);

    return (
        <div className="contacts" id="contact">
            <h1>CONTACT ME ON</h1>
            <ul>
                <List
                    setSelected={setSelected}
                />
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">

                        <img
                            src={d.img}
                            alt=""
                        />

                        <h3><a href={d.link}>{d.title}</a></h3>
                    </div>
                ))}
            </div>
        </div>
    );

    // const [message, setMessage] = useState(false);

    // const handlesubmit = (e) => {
    //     e.preventDefault();
    //     setMessage(true);
    // }

    // return (
    //     <div className = "contact" id= "contact">
    //         <div className="left">
    //             <img src= "assets/shake.svg" alt=""/>
    //         </div>
    //         <div className="right">
    //             <h2>Contact Me</h2>
    //             <form onSubmit={handlesubmit}>
    //                 <input type="text" placeholder="Email" />
    //                 <textarea placeholder= "Message"></textarea>
    //                 <button type="submit">Send</button>

    //                 {message && <span>Thank You... I will respond you soon...</span>}
    //             </form>
    //         </div>

    //     </div>
    // )
}
