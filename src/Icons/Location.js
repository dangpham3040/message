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
                d="M12 20.5c3.866 0 7-6.634 7-10.5a7 7 0 10-14 0c0 3.866 3.134 10.5 7 10.5zm0-7.5a3 3 0 100-6 3 3 0 000 6z"
                fill={props.fill || "#fff"}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 3.85A6.15 6.15 0 005.85 10c0 1.75.725 4.227 1.932 6.267.599 1.013 1.292 1.876 2.03 2.477.737.6 1.474.906 2.188.906.714 0 1.45-.305 2.188-.906.737-.601 1.431-1.464 2.03-2.477 1.207-2.04 1.932-4.517 1.932-6.267A6.15 6.15 0 0012 3.85zM4.15 10a7.85 7.85 0 0115.7 0c0 2.116-.842 4.89-2.169 7.133-.668 1.128-1.482 2.166-2.42 2.929-.937.764-2.042 1.288-3.261 1.288-1.22 0-2.324-.524-3.262-1.288-.937-.764-1.752-1.8-2.42-2.93C4.993 14.89 4.15 12.117 4.15 10zM12 7.85a2.15 2.15 0 100 4.3 2.15 2.15 0 000-4.3zM8.15 10a3.85 3.85 0 117.7 0 3.85 3.85 0 01-7.7 0z"
                fill={props.fill || "#000"}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 7.85a2.15 2.15 0 100 4.3 2.15 2.15 0 000-4.3zM8.15 10a3.85 3.85 0 117.7 0 3.85 3.85 0 01-7.7 0z"
                fill={props.fill || "#000"}
            />
        </Svg>
    )
}

export default SvgComponent
