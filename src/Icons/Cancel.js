import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.399 7.399a.85.85 0 000 1.202l8.485 8.485a.85.85 0 101.202-1.202L8.601 7.4a.85.85 0 00-1.202 0z"
        fill={props.fill|| "#000"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.086 7.399a.85.85 0 010 1.202l-8.485 8.485a.85.85 0 11-1.202-1.202L15.884 7.4a.85.85 0 011.202 0z"
        fill={props.fill|| "#000"}
      />
    </Svg>
  )
}

export default SvgComponent
