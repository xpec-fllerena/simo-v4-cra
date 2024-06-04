
import { useState, useCallback, ReactNode } from "react"
import cn from "classnames"
import { LuInfo } from "react-icons/lu"
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io"
import { Tooltip } from "components/Core"

interface IFormSection {
  title: string
  number: number
  helperText: string
  children: ReactNode
  className?: string
  classNameContent?: string
}

const FormSection = ({ title, number, helperText, children, className, classNameContent }: IFormSection) => {
  const [open_section, set_open_section] = useState(true)

  const handle_open_section = useCallback(() => set_open_section(!open_section), [open_section, set_open_section])

  return (
    <div className={cn("w-full lg:w-3/5 h-auto flex flex-col border rounded-lg", className, {})}>
      <div
        className={cn("w-full h-20 flex flex-row items-center justify-between rounded-lg border-b bg-white", {
          "rounded-ee-none": Boolean(!open_section),
        })}
      >
        <div className={cn("w-full h-full flex flex-row items-center justify-start gap-4", {})}>
          <div
            className={cn("w-3 h-full rounded-ss-lg bg-[#F9004D]", {
              "rounded-l-lg": Boolean(open_section),
            })}
          ></div>
          <div className="flex flex-col items-center justify-center w-10 h-10 border border-[#414142] rounded-full">
            <p className="text-[#414142] font-medium">{number}</p>
          </div>
          <h4 className="text-lg font-medium first-letter:capitalize">{title}</h4>
          <Tooltip content={helperText} align="top">
            <LuInfo className="text-xl font-medium cursor-help" />
          </Tooltip>
        </div>
        <div onClick={handle_open_section} className="cursor-pointer p-2 mr-4">
          {open_section ? <IoIosArrowForward className="text-xl" /> : <IoIosArrowDown className="text-xl" />}
        </div>
      </div>
      {!open_section ? (
        <div
          className={cn("w-full flex flex-col items-center justify-center p-2 rounded-b-lg bg-white", classNameContent)}
        >
          {children}
        </div>
      ) : null}
    </div>
  )
}

export default FormSection
