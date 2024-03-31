import "../../public/global.css"
import "./Documentation.css"
import Highlight from "../Components/Highlight/Highlight"

function Documentation() {
    return (
        <div className="body paragraph-content">
            <h1>Mustang Media Website Documentation</h1>

            <h2>Using the Website Editor</h2>
            <p>The Website editor is a feature that will be added in the future. It will allow someone with an admin password to edit the contents of a web page belonging to this website in a graphic editor. This will require near zero programming knowledge. However, it will require the editor to read this web page (documentation) first, in order to know how to properly style and format the web page.</p>

            {/* <h2>Creating Icons</h2>
            <p><Highlight text="Components/DynamicIcon/DynamicIcon.jsx" /> provides an export named <Highlight text="DynamicIcon" />. This accepts 3 arguments: <Highlight text="name" />, <Highlight text="iconColor" /> and <Highlight text="iconSize" />. "name" gives the name of the FA6 icon. In order to know if a icon is supported, go to <a href="https://react-icons.github.io/react-icons/icons/fa6">React Icons</a>. Make sure when you are creating an icon that the first letter is capitalized. The function prepends "Fa" to the icon name. This means that the "iconName" prop should not have "Fa" at the beginning, but just the name of the icon.</p>
            
            <p><Highlight text="DynamicIcon.jsx" /></p>
            <p>Description</p> */}
        </div>
    )
}

export default Documentation