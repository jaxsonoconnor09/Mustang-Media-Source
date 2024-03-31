import "../public/global.css"
import "./Nav.css"

import {Link} from "react-router-dom"
import {FaListUl, FaRegHandPeace} from "react-icons/fa6"

export default function Nav() {
    return (
        <nav id="nav">
            <span id="nav-content">
                <Link to="/">
                    <div id="logo-container">
                        <img id="logo" alt="Mustang Media" src="../public/logos/Mustang-Media-Wordmark-Logo.png" />
                    </div>
                </Link>
                <div id="nav-buttons">
                    <Link to="/blogs" className="link normal-nav-button" id="blogs">
                        <FaRegHandPeace className="icon" />
                    </Link>

                    <Link to="/style-guide" className="link normal-nav-button" id="style-guide">
                        <FaListUl className="icon" />
                    </Link>

                    <Link to="/contact" className="link" id="contact">
                        Contact Us
                    </Link>
                </div>
            </span>
        </nav>
    );
}