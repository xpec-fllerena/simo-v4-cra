
import cn from "classnames"
import { useCallback, useState } from "react"
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io"

interface ICollapseWithDetail {
  title: string
  details: any
}

const CollapseWithDetail = ({ title, details }: ICollapseWithDetail) => {
  const [open_collapse, set_open_collapse] = useState(false)

  const handle_collapse = useCallback(() => {
    set_open_collapse(!open_collapse)
  }, [open_collapse, set_open_collapse])

  const conditional_arrow_styles = {
    "text-[#F9004D]": Boolean(open_collapse),
  }

  console.log("details", details)

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center bg-white rounded-xl">
      <div
        className={cn("w-full h-auto flex flex-row items-center justify-between cursor-pointer rounded-xl border p-4", {
          "rounded-b-none": Boolean(open_collapse)
        })}
        onClick={handle_collapse}
      >
        <h4 className="text-lg font-medium">{title}</h4>
        {open_collapse ? (
          <IoIosArrowDown className={cn("text-lg font-semibold", conditional_arrow_styles)} />
        ) : (
          <IoIosArrowForward className={cn("text-lg font-semibold", conditional_arrow_styles)} />
        )}
      </div>
      {open_collapse ? (
        <div className="w-full flex border border-t-0 rounded-b-xl">
          <div className="w-full flex flex-col">
            {Object.entries(details).map(([key, val]: any, i: number) => (
              <div key={i} className="w-full border-t p-4">
                <p className="text-[#4C4C4C] text-sm">
                  <span className="font-semibold">{key}:</span> {val}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default CollapseWithDetail
