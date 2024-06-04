import { INotification } from "components/Core/Notifications/Notification"
import { Dispatch, SetStateAction } from "react"

interface IContextProps<State, DispactActions> {
  state: State
  dispatch: Dispatch<DispactActions>
}

export type ContextPropType<State, DispactActions> = IContextProps<State, DispactActions>

export type NotificationActionsType =
  | { type: "ADD_NOTIFICATION"; payload: INotification }
  | { type: "DELETE_NOTIFICATION"; payload: number | undefined }

export interface AppContextType {
  open_sidebar: boolean
  set_open_sidebar: Dispatch<SetStateAction<boolean>>
  loading_app: boolean
  set_loading_app: Dispatch<SetStateAction<boolean>>
  notification: ContextPropType<Array<INotification>, NotificationActionsType>
  breadcrumbs_routes: Array<{ name: string; href: string }>
  set_breadcrumbs_routes: Dispatch<SetStateAction<Array<{ name: string; href: string }>>>
  open_table_filters: boolean
  set_open_table_filters: Dispatch<SetStateAction<boolean>>
  filters_table: any
  set_filters_table: Dispatch<SetStateAction<any>>
}
