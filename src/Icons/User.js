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
        d="M7.15 20h9.7c1.936 0 2.742-2.478 1.176-3.617l-.85-.618A4 4 0 0014.825 15H9.176a4 4 0 00-2.353.765l-.849.617C4.407 17.523 5.214 20 7.15 20z"
        fill={props.fill||"#fff"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.176 15.85a3.15 3.15 0 00-1.853.603l-.849.617c-.9.655-.437 2.08.676 2.08h9.7c1.113 0 1.577-1.425.676-2.08l-.849-.617a3.15 3.15 0 00-1.853-.603H9.176zm-2.853-.772a4.85 4.85 0 012.853-.928h5.648a4.85 4.85 0 012.853.928l-.5.687.5-.687.849.617c2.232 1.624 1.084 5.155-1.676 5.155h-9.7c-2.76 0-3.908-3.531-1.676-5.155l.85-.617z"
        fill={props.fill||"#000"}
      />
      <Path
        d="M16 8a4 4 0 11-8 0 4 4 0 018 0z"
        fill={props.fill||"#000"}
    
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4.85a3.15 3.15 0 100 6.3 3.15 3.15 0 000-6.3zM7.15 8a4.85 4.85 0 119.7 0 4.85 4.85 0 01-9.7 0z"
        fill={props.fill||"#000"}
      />
    </Svg>
  )
}

export default SvgComponent
