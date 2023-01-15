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
                d="M6 7a3 3 0 013-3h6a3 3 0 013 3v10a3 3 0 01-3 3H9a3 3 0 01-3-3V7z"
                fill={props.fill || "#fff"}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.15 7A3.85 3.85 0 019 3.15h6A3.85 3.85 0 0118.85 7v10A3.85 3.85 0 0115 20.85H9A3.85 3.85 0 015.15 17V7zM9 4.85A2.15 2.15 0 006.85 7v10A2.15 2.15 0 009 19.15h6A2.15 2.15 0 0017.15 17V7A2.15 2.15 0 0015 4.85H9z"
                fill={props.fill || "#fff"}
            />
            <Path
                d="M9.877 16h4.246c.848 0 1.2-1.487.515-2.17l-.372-.371c-.3-.298-.66-.459-1.03-.459h-2.472c-.37 0-.73.16-1.03.459l-.372.37C8.677 14.513 9.03 16 9.877 16zM14 10a2 2 0 11-4 0 2 2 0 014 0z"
                fill={props.dot|| "#fff"}
            />
        </Svg>
    )
}

export default SvgComponent
