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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.15 8c0-.47.38-.85.85-.85h12a.85.85 0 010 1.7H6A.85.85 0 015.15 8zM5.15 12c0-.47.38-.85.85-.85h12a.85.85 0 010 1.7H6a.85.85 0 01-.85-.85zM5.15 16c0-.47.38-.85.85-.85h12a.85.85 0 010 1.7H6a.85.85 0 01-.85-.85z"
                fill={props.fill||"#000"}
            />
        </Svg>
    )
}

export default SvgComponent
