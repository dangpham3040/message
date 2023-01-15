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
                fill={props.fill || "#fff"}

            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.15 12a8.15 8.15 0 10-16.3 0 8.15 8.15 0 0016.3 0zM12 2.15c5.44 0 9.85 4.41 9.85 9.85 0 5.44-4.41 9.85-9.85 9.85-5.44 0-9.85-4.41-9.85-9.85 0-5.44 4.41-9.85 9.85-9.85z"
                fill={props.dot|| "#000"}
            />
            <Path
                d="M9.728 12A1.364 1.364 0 117 12a1.364 1.364 0 012.728 0zM13.364 12a1.364 1.364 0 11-2.728 0 1.364 1.364 0 012.728 0zM17 12a1.364 1.364 0 11-2.727 0A1.364 1.364 0 0117 12z"
                fill={props.dot|| "#000"}
            />
        </Svg>
    )
}

export default SvgComponent
