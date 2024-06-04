
import { useCallback, useContext, useMemo, useState } from "react"
import { useLocation } from "react-router-dom"
import cn from "classnames"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"

import sidebar_menu_info from "components/Core/Layout/Sidebar/SidebarItems.json"
import { AppContext } from "store/context/AppContext"
// import { Tooltip } from "components/Core"
import useLogin from "hooks/useLogin"
import icon_sidebar_helper from "helpers/icon_sidebar_helper"

const SidebarItems = ({ sidebar_opened }: any) => {
  const { set_open_sidebar } = useContext(AppContext)
  const { logout_user_action } = useLogin()
  const selected_path = useLocation()

  const handle_open_sidebar = useCallback(() => set_open_sidebar(true), [set_open_sidebar])

  const items_top = useMemo(() => sidebar_menu_info?.data.filter((items) => items.position === "top") || [], [])
  const items_bottom = useMemo(() => sidebar_menu_info?.data.filter((items) => items.position === "bottom") || [], [])

  const ItemCollapsible = ({ name, icon, items }: any) => {
    const [open_collapse, set_open_collapse] = useState(false)
    const Icon = icon_sidebar_helper(icon)

    const handle_collapse = useCallback(() => set_open_collapse(!open_collapse), [open_collapse, set_open_collapse])

    return (
      <div className="w-full">
        <div
          onClick={handle_collapse}
          className="text-md w-full h-12 flex flex-row items-center justify-between px-6 cursor-pointer hover:text-[#F9004D] hover:bg-[#F0F0F0]"
        >
          <div className="flex flex-row items-center justify-start gap-4">
            <Icon className="text-lg" />
            <p>{name}</p>
          </div>
          {open_collapse ? <IoIosArrowUp className="text-lg" /> : <IoIosArrowDown className="text-lg" />}
        </div>
        {open_collapse ? (
          <div className="flex flex-col">
            {items.map((_it: any, _i: number) => (
              <ItemClickeable name={_it?.name} href={_it?.href} from_collapsible key={_i} />
            ))}
          </div>
        ) : null}
      </div>
    )
  }

  const ItemClickeable = ({ icon, name, href, from_collapsible }: any) => {
    const Icon = icon_sidebar_helper(icon)
    const handle_logout = useCallback(() => icon === "logout" && logout_user_action(), [icon])

    return (
      <a
        onClick={handle_logout}
        href={href || "#"}
        className={cn(
          "w-full h-12 flex flex-row items-center justify-start gap-4 px-6 text-black hover:text-[#F9004D] hover:bg-[#F0F0F0]",
          {
            "pl-8": Boolean(from_collapsible),
            "text-[#F9004D]": Boolean(href === selected_path),
          },
        )}
      >
        {Icon ? from_collapsible ? null : <Icon className="text-lg" /> : null}
        <p className="text-md">{name}</p>
      </a>
    )
  }

  const IconShrink = ({ item: { icon, name } }: any) => {
    const Icon = icon_sidebar_helper(icon)

    return (
      <div className="w-full flex flex-row items-center justify-center py-2">
        {/* <Tooltip content={name}> */}
          <Icon onClick={handle_open_sidebar} className="text-xl hover:text-[#F9004D] cursor-pointer" />
        {/* </Tooltip> */}
      </div>
    )
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-between overflow-auto">
      <div className={cn("w-full flex-col", { "lg:hidden": Boolean(!sidebar_opened), flex: Boolean(sidebar_opened) })}>
        {items_top.map((item, i) => {
          if (item.type === "normal")
            return <ItemClickeable name={item?.name} href={item?.href} icon={item?.icon} key={i} />
          if (item.type === "collapsible")
            return <ItemCollapsible name={item?.name} icon={item?.icon} items={item?.items} key={i} />
          return null
        })}
      </div>
      <div className={cn("w-full flex flex-col", { "lg:hidden": Boolean(!sidebar_opened) })}>
        {items_bottom.map((item, i) => {
          return <ItemClickeable name={item?.name} href={item?.href} icon={item?.icon} key={i} />
        })}
      </div>

      <div
        className={cn("w-full flex-col overflow-auto hidden", {
          hidden: Boolean(sidebar_opened),
          "lg:flex": Boolean(!sidebar_opened),
        })}
      >
        {items_top.map((item, i) => {
          return <IconShrink key={i} item={item} className="text-lg" />
        })}
      </div>
      <div
        className={cn("w-full flex-col hidden", {
          hidden: Boolean(sidebar_opened),
          "lg:flex": Boolean(!sidebar_opened),
        })}
      >
        {items_bottom.map((item, i) => {
          return <IconShrink key={i} item={item} className="text-lg" />
        })}
      </div>
    </div>
  )
}

export default SidebarItems
