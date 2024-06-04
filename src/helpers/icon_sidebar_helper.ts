import { HiHome } from "react-icons/hi"
import { FaClipboardList } from "react-icons/fa"
import { FaTruck } from "react-icons/fa"
import { FaTruckRampBox } from "react-icons/fa6";
import { HiDocumentReport } from "react-icons/hi";
import { MdOutbox } from "react-icons/md";
import { IoIosStats } from "react-icons/io";

import { IoIosSettings } from "react-icons/io"
import { TbLogout } from "react-icons/tb"
import { TfiLayoutWidthDefaultAlt } from "react-icons/tfi"

const icon_sidebar_helper = (name: string) => {
  const icons: any = {
    home: HiHome,
    orders: FaClipboardList,
    logistic: FaTruck,
    inventory: FaTruckRampBox,
    reports: HiDocumentReport,
    bulk: MdOutbox,
    business: IoIosStats,
    settings: IoIosSettings,
    logout: TbLogout,
  }
  return icons.hasOwnProperty(name) ? icons[name] : TfiLayoutWidthDefaultAlt
}

export default icon_sidebar_helper
