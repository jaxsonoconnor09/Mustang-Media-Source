import { useEffect, useState } from "react";
import "../../public/global.css"
import "./Auth.css"

function Auth() {

    const pass = "admin";
    const [input, setInput] = useState("");

    useEffect(() => {
        if (input == pass) {
            window.location.href = "/style-guide";
            console.log("correct");
        }
    }, [input])
    
    return (
        <div className="input-panel">
            <h3>Admin Password</h3>
            <span>
                <input type="password" id="admin-pass-input" />
                <button id="admin-pass-submit" onClick={() => setInput(document.querySelector("#admin-pass-input").value)}>Submit</button>
            </span>
        </div>
    )
}

// TODO: make global.css in each of the .css files

export default Auth