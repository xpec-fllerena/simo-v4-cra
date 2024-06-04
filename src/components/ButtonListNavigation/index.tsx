import cn from "classnames"
import {Link} from "react-router-dom"
import { FaPlus } from "react-icons/fa6"

interface IButtonListNavigation {
  label: string
  route: string
  className?: string
}

const ButtonListNavigation = ({ route, label, className }: IButtonListNavigation) => {
  return (
    <Link
      to={route}
      className={cn(
        "w-auto flex flex-row items-center justify-center gap-2 py-1.5 px-4 font-semibold text-sm rounded-md bg-[#F9004D] text-white transform transition duration-500 hover:scale-105 whitespace-nowrap",
        className,
      )}
    >
      <p>{label}</p>
      <FaPlus />
    </Link>
  )
}

export default ButtonListNavigation
