
import { Fragment, useContext, useCallback } from "react"
import cn from "classnames"
import { AppContext } from "store/context/AppContext"
import { IoMdClose } from "react-icons/io"
import { MdKeyboardArrowRight } from "react-icons/md"
import SidebarItems from "components/Core/Layout/Sidebar/SidebarItems"

interface ISidebar {
  className?: string
}

const Sidebar = ({ className }: ISidebar) => {
  const { open_sidebar, set_open_sidebar } = useContext(AppContext)

  const handle_sidebar = useCallback(() => set_open_sidebar(!open_sidebar), [open_sidebar, set_open_sidebar])

  const RowCollapseSidebar = () => (
    <div className="w-full h-[2.5rem] hidden lg:flex flex-row justify-end items-center px-4">
      {open_sidebar ? (
        <IoMdClose className="text-md font-medium cursor-pointer hover:opacity-70" onClick={handle_sidebar} />
      ) : (
        <MdKeyboardArrowRight
          className="text-xl font-medium cursor-pointer hover:opacity-70"
          onClick={handle_sidebar}
        />
      )}
    </div>
  )

  return (
    <Fragment>
      <div
        className={cn(
          "absolute w-64 h-[calc(100vh_-_5rem)] hidden lg:flex flex-col items-start justify-start text-black bg-white",
          {
            "-translate-x-64": !open_sidebar,
            "lg:w-20": !open_sidebar,
            "lg:-translate-x-0": !open_sidebar,
          },
          className,
        )}
      >
        <RowCollapseSidebar />
        <SidebarItems sidebar_opened={open_sidebar} />
      </div>
      <div
        className={cn(
          "absolute w-screen h-[calc(100vh_-_5rem)] lg:hidden flex flex-col items-center justify-start text-black bg-white z-40 transition-all",
          {
            "-translate-x-0": !open_sidebar,
            "-translate-x-full": open_sidebar,
          },
        )}
      >
        <RowCollapseSidebar />
        <SidebarItems sidebar_opened={open_sidebar} />
      </div>
    </Fragment>
  )
}

export default Sidebar
