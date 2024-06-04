import { ReactNode } from "react"
import { Tooltip as TT } from "flowbite-react"

interface ITooltip {
  children: ReactNode
  content: string
  align?: "top" | "bottom" | "right" | "left"
}

const Tooltip = ({ children, content, align = "left" }: ITooltip) => {
  return (
    <TT placement={align} content={content}>
      {children}
    </TT>
  )
}

export default Tooltip
