
import { RefObject, useEffect, useRef, useState, ReactNode } from "react"

interface IPopover {
  children: ReactNode
  content: ReactNode
  trigger?: string
}

function Popover({ children, content, trigger = "click" }: IPopover) {
  const [show, setShow] = useState(false)
  const wrapperRef: RefObject<HTMLDivElement> = useRef(null)

  const handleMouseOver = () => {
    if (trigger === "hover") {
      setShow(true)
    }
  }

  const handleMouseLeft = () => {
    if (trigger === "hover") {
      setShow(false)
    }
  }

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShow(false)
      }
    }

    if (show) {
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }
  }, [show, wrapperRef])

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeft}
      className="w-fit h-fit relative flex justify-center"
    >
      <div onClick={() => setShow(!show)}>{children}</div>
      <div hidden={!show} className="min-w-fit w-auto h-fit absolute top-11 -right-2 z-50 transition-all">
        <div className="rounded-xl bg-white shadow-lg p-2">
          <div className="absolute -top-2 right-4 w-0 h-0 border-l-[0.6rem] border-l-transparent border-b-[1rem] border-b-white border-r-[0.6rem] border-r-transparent"></div>
          {content}
        </div>
      </div>
    </div>
  )
}

export default Popover
