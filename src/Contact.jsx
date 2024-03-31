import "./Contact.css"
import "../public/global.css"
import {FaPhone} from "react-icons/fa6"

export default function Contact() {
    return (
        <div className="body flex-vert-center">
            <div className="body-content">
                <p className="read-p">In order to speak to a representative of Eagle High School, you can call the front desk with the phone number: <Highlight text="(208) 350-4235" />. You can ask about signing up for the Introduction to Marketing course, taught by Mr. Rogerson.</p>
            </div>
        </div>
    )
}

const Highlight = (props) => {
    return (
        <span className="highlight">{props.text}</span>
    )
}

const Card = (props) => {
    return (
        <div className="card">
            <FaPhone className="icon" />
            <p>{props.text}</p>
        </div>
    )
}