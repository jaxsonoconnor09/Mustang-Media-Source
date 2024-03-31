import "../../public/global.css"
import "./Nav.css"

import {Link} from "react-router-dom"
import {FaListUl, FaCode, FaNewspaper, FaPen} from "react-icons/fa6"

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
                    <Link title="Website Editor" to="/website-editor-auth" className="link normal-nav-button" id="website-editor-auth">
                        <FaPen title="Website Editor" />
                    </Link>

                    <Link title="Documentation" to="/documentation" className="link normal-nav-button" id="documentation">
                        <FaCode className="icon" />
                    </Link>

                    <Link title="Blogs" to="/blogs" className="link normal-nav-button" id="blogs">
                        <FaNewspaper className="icon" />
                    </Link>

                    <Link title="Style Guide" to="/style-guide" className="link normal-nav-button" id="style-guide">
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