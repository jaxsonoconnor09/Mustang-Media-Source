import "../../../public/global.css"

export default function Highlight(props) {
    return (
        <span className="highlight">{props.text}</span> // styling in ../../../public/global.css
    )
}