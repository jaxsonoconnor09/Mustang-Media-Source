import * as Icons from "react-icons/fa6"

export default function DynamicIcon({name, iconColor, iconSize}) {
    const IconComponent = Icons["Fa" + name] || null;
    return (
        IconComponent
            ?   <div className="icon-container" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <IconComponent style={{color: iconColor, fontSize: iconSize}} />
                </div>
            : null
    )
}