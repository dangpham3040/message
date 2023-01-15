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
        d="M11.137 15.574a4.437 4.437 0 100-8.874 4.437 4.437 0 000 8.874zm0 1.7a6.137 6.137 0 100-12.274 6.137 6.137 0 000 12.274z"
        fill={props.fill || "#000"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.92 14.92a.85.85 0 000 1.201l2.48 2.48a.85.85 0 101.201-1.202l-2.48-2.48a.85.85 0 00-1.202 0z"
        fill={props.fill || "#000"}
      />
    </Svg>
  )
}

export default SvgComponent
