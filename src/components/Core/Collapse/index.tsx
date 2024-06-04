
import cn from "classnames"
import { ReactNode, useCallback, useState } from "react"
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io"

interface ICollapse {
  name: string
  header: ReactNode
  children: ReactNode
}

const Collapse = ({ header, children }: ICollapse) => {
  const [open_collapse, set_open_collapse] = useState(false)

  const handle_collapse = useCallback(() => {
    set_open_collapse(!open_collapse)
  }, [open_collapse, set_open_collapse])

  const conditional_arrow_styles = {
    "text-[#F9004D]": Boolean(open_collapse),
  }

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
      <div
        className="w-full h-auto flex flex-row items-center justify-between cursor-pointer border p-4"
        onClick={handle_collapse}
      >
        {header}
        {open_collapse ? (
          <IoIosArrowDown className={cn("text-lg font-semibold", conditional_arrow_styles)} />
        ) : (
          <IoIosArrowForward className={cn("text-lg font-semibold", conditional_arrow_styles)} />
        )}
      </div>
      {open_collapse ? <div className="w-full flex border border-t-0 p-4">{children}</div> : null}
    </div>
  )
}

export default Collapse
