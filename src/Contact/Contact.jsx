import "./Contact.css"
import "../../public/global.css"

import Highlight from "../Components/Highlight/Highlight"
import DynamicIcon from "../Components/DynamicIcon/DynamicIcon"

export default function Contact() {
    return (
        <div className="body flex-vert-center">
            <div className="body-content paragraph-content">
                <h1>Contact Information</h1>

                <h2>Front Office</h2>
                <p className="read-p">In order to speak to a representative of Eagle High School, you can call the front desk with the phone number: <Highlight text="(208) 350-4235" />. You can ask about signing up for the Introduction to Marketing course, taught by Mr. Rogerson. Note: this course is only availabe to students who are currently attending or plan to attend Eagle High School.</p>

                <h2>Email</h2>
                <p className="read-p">To email the Mustang Media team, you should use the email: <Highlight text="mustangmedia@westada.org" />.</p>
            
                <h1>Social Media</h1>
                <Card name="Instagram" iconColor="#FF0000" text="ehs.mustangmedia" iconSize="25px" />
            </div>
        </div>
    )
}

const Card = (props) => {
    return (
        <div className="card">
            <DynamicIcon name={props.name} iconColor={props.iconColor} iconSize={props.iconSize} />
            <p style={{marginLeft: "10px"}}>{props.text}</p>
        </div>
    )
}