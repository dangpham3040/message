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
                d="M4 9a4 4 0 014-4h8a4 4 0 014 4v6a4 4 0 01-4 4H8a4 4 0 01-4-4V9z"
                fill={props.fill || "#fff"}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 6.7H8A2.3 2.3 0 005.7 9v6A2.3 2.3 0 008 17.3h8a2.3 2.3 0 002.3-2.3V9A2.3 2.3 0 0016 6.7zM8 5a4 4 0 00-4 4v6a4 4 0 004 4h8a4 4 0 004-4V9a4 4 0 00-4-4H8z"
                fill={props.dot|| "#000"}

            />
            <Path d="M17 9a1 1 0 11-2 0 1 1 0 012 0z"     fill={props.dot|| "#000"}/>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.7 12a1.3 1.3 0 102.6 0 1.3 1.3 0 00-2.6 0zM12 9a3 3 0 100 6 3 3 0 000-6z"
                fill={props.dot|| "#000"}
            />
        </Svg>
    )
}

export default SvgComponent
