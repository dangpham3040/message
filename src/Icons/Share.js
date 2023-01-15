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
                d="M6.934 11.925a.85.85 0 01.31-1.161l8.661-5a.85.85 0 11.85 1.472l-8.66 5a.85.85 0 01-1.161-.311z"
                fill={props.fill||"#000"}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.934 11.075a.85.85 0 00.31 1.161l8.661 5a.85.85 0 10.85-1.472l-8.66-5a.85.85 0 00-1.161.311z"
                fill={props.fill||"#000"}
            />
            <Path
                d="M19 6.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM19 16.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 11.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                fill={props.fill||"#000"}
            />
        </Svg>
    )
}

export default SvgComponent
