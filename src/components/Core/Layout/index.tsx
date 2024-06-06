
import { ReactNode, useContext } from "react"
import cn from "classnames"

// import Footer from "components/Core/Layout/Footer"
import Header from "components/Core/Layout/Header"
import Sidebar from "components/Core/Layout/Sidebar"
import { AppContext } from "store/context/AppContext"
import NotificationList from "components/Core/Notifications/NotificationList"
import Spinner from "components/Core/Spinner"

import Filters from "components/Filters"

interface ILayout {
  children: ReactNode
}

const Layout = ({ children }: ILayout) => {
  const { open_sidebar } = useContext(AppContext)

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <NotificationList />
      <Filters />
      <Spinner />
      <div className="w-full h-full max-w-[2560px] flex flex-col overflow-hidden">
        <Header />
        <div className="w-full h-full flex flex-row">
          <Sidebar className="ease-in-out duration-500" />
          <div
            className={cn(
              "relative w-full h-[calc(100vh_-_5rem)] flex flex-col items-center justify-between bg-[#F9F9F9] overflow-y-auto",
              {
                "lg:w-[calc(100vw_+_16rem)]": open_sidebar,
                "lg:ml-64": open_sidebar,
                "lg:ml-20": !open_sidebar,
              },
            )}
          >
            <div className="w-full h-full flex flex-col">{children}</div>
            {/* <Footer className="" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
