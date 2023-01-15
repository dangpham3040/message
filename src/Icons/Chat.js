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
            <Path d="M4 12a8 8 0 118 8H4v-8z" fill={props.fill || "#000"}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.15 12A8.85 8.85 0 1112 20.85H3.15V12zM12 4.85A7.15 7.15 0 004.85 12v7.15H12a7.15 7.15 0 000-14.3z"
                fill={props.dot|| "#000"}
            />
            <Path
                d="M9.728 12A1.363 1.363 0 117 12a1.363 1.363 0 012.727 0zM13.364 12a1.364 1.364 0 11-2.727 0 1.364 1.364 0 012.727 0zM17 12a1.363 1.363 0 11-2.727 0A1.363 1.363 0 0117 12z"
                fill={props.dot|| "#000"}
            />
        </Svg>
    )
}

export default SvgComponent
