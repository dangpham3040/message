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
                d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z"
                fill={props.fill || "#000"}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 4.85a7.15 7.15 0 100 14.3 7.15 7.15 0 000-14.3zM3.15 12a8.85 8.85 0 1117.7 0 8.85 8.85 0 01-17.7 0z"
                fill={props.fill || "#000"}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 11.15c.47 0 .85.38.85.85v3a.85.85 0 01-1.7 0v-3c0-.47.38-.85.85-.85z"
                fill={props.dot|| "yellow"}
            />
            <Path d="M13 9a1 1 0 11-2 0 1 1 0 012 0z" fill="yellow" />
        </Svg>
    )
}

export default SvgComponent
