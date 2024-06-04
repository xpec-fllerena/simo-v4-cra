
import { useReducer, useState } from "react"
import { AppContext } from "store/context/AppContext"
import { NotificationReducer } from "store/reducers/NotificationReducer"

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [open_sidebar, set_open_sidebar] = useState(true)
  const [open_table_filters, set_open_table_filters] = useState(false)
  const [loading_app, set_loading_app] = useState(false)
  const [breadcrumbs_routes, set_breadcrumbs_routes] = useState<Array<{ name: string; href: string }>>([])
  const [notifications, set_notifications] = useReducer(NotificationReducer, [])
  const [filters_table, set_filters_table] = useState({})

  return (
    <AppContext.Provider
      value={{
        open_sidebar,
        set_open_sidebar,
        loading_app,
        set_loading_app,
        notification: {
          state: notifications,
          dispatch: set_notifications,
        },
        breadcrumbs_routes,
        set_breadcrumbs_routes,
        open_table_filters,
        set_open_table_filters,
        filters_table,
        set_filters_table,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
