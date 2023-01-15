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
        d="M18.053 12.474c1.104 0 2.023.907 1.766 1.981a8.524 8.524 0 01-9.956 6.381 8.527 8.527 0 01-.318-16.655c1.074-.257 1.981.662 1.981 1.766v4.527a2 2 0 002 2h4.527z"
        fill={props.fill || "#000"}
      />
      <Path
        d="M19.27 12.474c.432 0 .786.35.747.781a8.526 8.526 0 11-9.272-9.272c.43-.04.781.315.781.747 0 .433-.351.779-.78.827a6.96 6.96 0 107.697 7.698c.048-.43.394-.781.827-.781z"
        fill={props.dot|| "#000"}
      />
      <Path
        d="M12.961 5.018c.083-1.101 1.057-1.95 2.109-1.613a8.526 8.526 0 015.5 5.449c.346 1.048-.493 2.03-1.593 2.123l-4.165.352a2 2 0 01-2.163-2.143l.313-4.168z"
        fill={props.dot|| "#000"}
      />
    </Svg>
  )
}

export default SvgComponent
