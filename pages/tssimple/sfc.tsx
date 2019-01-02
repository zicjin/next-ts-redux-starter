import React, { SFC, MouseEvent, ReactNode } from "react"

type Props = {
  children?: ReactNode
  color?: string
  onClick(e: MouseEvent<HTMLElement>): void
}

// SFC是interface StatelessComponent<P>的别名
const Button: SFC<Props> = ({ onClick: handleClick, color, children }) => (
  <button style={{ color }} onClick={handleClick}>
    {children} {/* {color}  color possibly undefine*/}
  </button>
)

export default Button
