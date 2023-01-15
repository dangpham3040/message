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
                d="M12 21a9 9 0 110-18 9 9 0 010 18z"
                fill={props.fill || "gray"}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.15 12a8.15 8.15 0 10-16.3 0 8.15 8.15 0 0016.3 0zM12 2.15c5.44 0 9.85 4.41 9.85 9.85 0 5.44-4.41 9.85-9.85 9.85-5.44 0-9.85-4.41-9.85-9.85 0-5.44 4.41-9.85 9.85-9.85z"
                fill={props.fill || "#000"}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 7.15c.47 0 .85.38.85.85v8a.85.85 0 01-1.7 0V8c0-.47.38-.85.85-.85z"
                fill={props.dot|| "#fff"}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.15 12c0-.47.38-.85.85-.85h8a.85.85 0 010 1.7H8a.85.85 0 01-.85-.85z"
                fill={props.dot|| "#fff"}
            />
        </Svg>
    )
}

export default SvgComponent
