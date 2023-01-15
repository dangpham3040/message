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
                d="M14.601 17.601a.85.85 0 000-1.202l-4.293-4.293a.15.15 0 010-.212L14.601 7.6A.85.85 0 1013.4 6.399l-4.293 4.293a1.85 1.85 0 000 2.616l4.293 4.293a.85.85 0 001.202 0z"
                fill={props.fill || "#000"}
            />
        </Svg>
    )
}

export default SvgComponent
