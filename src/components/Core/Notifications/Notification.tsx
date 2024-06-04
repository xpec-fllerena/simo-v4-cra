
import { useContext, useEffect } from "react"
import cn from "classnames"
import { FaCheckCircle, FaWindowClose, FaInfoCircle } from "react-icons/fa"
import { MdError } from "react-icons/md"

import { AppContext } from "store/context/AppContext"

export interface INotification {
  id?: number
  type?: "success" | "danger" | "info"
  title?: string
  message?: string
  delay?: number
}

const Notification = ({ id, message, title, type, delay = 5000 }: INotification) => {
  const { notification } = useContext(AppContext)

  useEffect(() => {
    const timeout = setTimeout(() => notification?.dispatch({ type: "DELETE_NOTIFICATION", payload: id }), delay)

    return () => clearTimeout(timeout)
  }, [notification, id, delay])

  const renderIconByAction = () => {
    switch (type) {
      case "success":
        return <FaCheckCircle className="text-2xl text-white" />
      case "danger":
        return <MdError className="text-2xl text-white" />
      case "info":
        return <FaInfoCircle className="text-2xl text-white" />
    }
  }

  const handleCloseNotification = () => {
    notification?.dispatch({ type: "DELETE_NOTIFICATION", payload: id })
  }

  return (
    <div
      className={cn(
        "w-96 grid grid-cols-[3rem_1fr] gap-2 relative min-h-[100px] bg-white text-black shadow-xl rounded-xl mb-4",
        {},
      )}
    >
      <div
        className={cn("w-full h-full flex flex-col justify-center items-center self-center rounded-l-xl", {
          "bg-green-600": Boolean(type === "success"),
          "bg-red-600": Boolean(type === "danger"),
          "bg-blue-600": Boolean(type === "info"),
        })}
      >
        {renderIconByAction()}
      </div>
      <div className="w-auto md:w-96">
        <p className="text-sm font-bold mt-2 capitalize">{title}</p>
        <p className="text-xs text-black mt-1">{message}</p>
      </div>
      <div
        className="absolute right-3 top-2 cursor-pointer text-red-600"
        role="button"
        onClick={handleCloseNotification}
      >
        <FaWindowClose />
      </div>
    </div>
  )
}

export default Notification
