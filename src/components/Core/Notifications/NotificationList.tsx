import { useContext } from "react"
import Notification, { INotification } from "components/Core/Notifications/Notification"
import { AppContext } from "store/context/AppContext"

const NotificationList = () => {
  const {
    notification: { state },
  } = useContext(AppContext)
  const notifications: Array<INotification> = state

  if (!Boolean(notifications.length)) return null
  return (
    <div className="min-w-[100px] min-h-[100px] fixed right-4 top-6 z-50">
      {notifications.map(({ id, title, type, message, delay }) => (
        <Notification key={id} id={id} message={message} title={title} type={type} delay={delay} />
      ))}
    </div>
  )
}

export default NotificationList
