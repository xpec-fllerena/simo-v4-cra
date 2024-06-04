
import { createContext } from "react"
import { AppContextType } from "store/types/AppContextType"

export const AppContext = createContext<AppContextType>({
  open_sidebar: true,
  set_open_sidebar: () => {},
  loading_app: false,
  set_loading_app: () => {},
  notification: {
    state: [],
    dispatch: () => null,
  },
  breadcrumbs_routes: [],
  set_breadcrumbs_routes: () => {},
  open_table_filters: true,
  set_open_table_filters: () => {},
  filters_table: {},
  set_filters_table: () => {},
})