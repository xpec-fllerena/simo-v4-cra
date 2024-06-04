
import { useState, useEffect, useCallback, useImperativeHandle, ReactNode, forwardRef } from "react"
import { createPortal } from "react-dom"
import cn from "classnames"
import { HiX } from "react-icons/hi"

interface IModal {
  mounted?: boolean
  className?: string
  children: ReactNode
}

const Modal = forwardRef(({ mounted = false, className, children }: IModal, ref) => {
  const [is_open, set_is_open] = useState(mounted)

  useEffect(() => {
    set_is_open(mounted)
  }, [mounted])

  const handle_close = useCallback(() => {
    set_is_open(false)
  }, [])

  const handle_open = useCallback(() => {
    set_is_open(true)
  }, [])

  useImperativeHandle(
    ref,
    () => ({
      open: handle_open,
      close: handle_close,
    }),
    [handle_open, handle_close],
  )

  const template = (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.65)",
      }}
      className="absolute z-50 w-full h-full top-0 left-0 grid place-items-center"
    >
      <span
        className="absolute right-4 top-4 cursor-pointer p-2 w-10 h-10 grid place-items-center bg-white rounded-full shadow-sm"
        role="button"
        aria-label="close"
        onClick={handle_close}
      >
        <HiX />
      </span>
      <div className={cn("w-auto h-auto bg-white rounded-xl", className)}>{children}</div>
    </div>
  )

  return is_open ? createPortal(template, document?.body) : null
})

Modal.displayName = "Modal"

export default Modal
