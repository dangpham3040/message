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
                d="M4 9a5 5 0 015-5h6a5 5 0 015 5v6a5 5 0 01-5 5H9a5 5 0 01-5-5V9z"
                fill={props.fill || "#fff"}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.15 9A5.85 5.85 0 019 3.15h6A5.85 5.85 0 0120.85 9v6A5.85 5.85 0 0115 20.85H9A5.85 5.85 0 013.15 15V9zM9 4.85A4.15 4.15 0 004.85 9v6A4.15 4.15 0 009 19.15h6A4.15 4.15 0 0019.15 15V9A4.15 4.15 0 0015 4.85H9z"
                fill={props.fill || "#000"}
            />
            <Path d="M10 10a1 1 0 11-2 0 1 1 0 012 0z"  fill={props.dot|| "#000"} />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.623 10.544a1.65 1.65 0 012.754 0l1.978 2.997c.724 1.097-.063 2.559-1.377 2.559h-3.956c-1.314 0-2.1-1.462-1.377-2.559l1.978-2.997zm1.377 1L11.115 14.4h3.77L13 11.543z"
                fill={props.dot|| "#000"}
            />
        </Svg>
    )
}

export default SvgComponent
