import { INotification } from "components/Core/Notifications/Notification"
import { NotificationActionsType } from "store/types/AppContextType"

export const NotificationReducer = (
  state: Array<INotification>,
  action: NotificationActionsType,
): Array<INotification> => {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return [...state, { id: state.length, ...action.payload }]
    case "DELETE_NOTIFICATION":
      return state.filter(({ id }) => id !== action.payload)
    default:
      return state
  }
}
