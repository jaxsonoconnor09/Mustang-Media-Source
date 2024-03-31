import "../public/global.css"
import "./StyleGuide.css"

function StyleGuide() {
    return (
        <div className="body flex-vert-center">
            <div className="body-content paragraph-content">
                <h1>Brand Style Guide</h1>

                <h2>Overview</h2>
                <p>The Eagle High School brand style guide is for use by the entire Eagle High School community. This guide provides a framework that promotes consistency and outlines the standards for use of the Eagle High School brand. This includes the Eagle High School logo, logo modifications, colors and fonts. We recommend all parties utilize any element of our brand meet the specification outlined within this manual to help establish brand consistency.</p>
                <p>Our brand is an important asset to the students, staff, administration, coaches, alumni and supporters of Eagle High School. Proper brand identity is essential to differentiate us from other schools and creates a visual environment that generates excitement, promotes student engagement and boosts school spirit.</p>
                <p>Creation, applications or any use of the Eagle High School brand elements must conform to approve standards as authorized by Eagle High School. It is imperative that Eagle High School brand elements are used properly on all merchandise, web, printed materials, signage, etc. in a quality manner.</p>

                <h2>Color Palette</h2>
                <p style={{display: "flex", flexDirection: "column"}}>
                    <Color background="#004022" text="white" />
                    <Color background="#FFFFFF" text="black" />
                    <Color background="#000000" text="white" />
                    <Color background="#838383" text="black" />
                </p>
                <h2>Brand Logos</h2>

                <Image source="../public/logos/Mustang.png" />
                <Image source="../public/logos/MustangBlackAndWhite.png" />
            </div>
        </div>
    )
}

const Color = (props) => {
    return (
        <span style={{
            backgroundColor: `${props.background}`,
            color: `${props.text}`,
            fontFamily: "Gotham Bold",
            padding: "4px 12px", 
            border: "1px solid var(--dark-border)",
            textAlign: "center", margin: "2px 20px"}}
        >{props.background}</span>
    )
}

const Image = (props) => {
    return (
        <div className="image" style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "30px"
        }}>
            <img style={{height: "250px"}} src={props.source} onClick={() => window.open(`${props.source}`)} />
        </div>
    )
}

export default StyleGuide