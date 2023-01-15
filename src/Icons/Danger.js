import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={props.size || 25}
            height={props.size || 25}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M11.134 5.5a1 1 0 011.732 0L18.928 16a1 1 0 01-.866 1.5H5.938a1 1 0 01-.866-1.5l6.062-10.5z"
                fill={props.fill || "red"}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.338 4.65l6.062 10.5c1.04 1.8-.26 4.05-2.338 4.05H5.938c-2.079 0-3.378-2.25-2.338-4.05l6.062-10.5c1.039-1.8 3.637-1.8 4.676 0zm-1.472.85a1 1 0 00-1.732 0L5.072 16a1 1 0 00.866 1.5h12.124a1 1 0 00.866-1.5L12.866 5.5z"
                fill={props.dot|| "red"}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 8c.47 0 .85.38.85.85v3a.85.85 0 01-1.7 0v-3c0-.47.38-.85.85-.85z"
                fill={props.dot || "yellow"}
            />
            <Path d="M13 14.7a1 1 0 11-2 0 1 1 0 012 0z" fill={props.dot || "yellow"} />
        </Svg>
    )
}

export default SvgComponent
