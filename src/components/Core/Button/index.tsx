import cn from "classnames"
import { Button } from "flowbite-react"
import get_client_color from "utils/get_client_color"

interface IButton {
  label: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  className?: string
  disabled?: boolean
  icon?: any
  [k: string]: any
}

const TextField = ({ className, onClick, label, type = "button", disabled, icon: Icon, ...rest }: IButton) => {
  const _color = get_client_color()
  
  return (
    <Button
      {...rest}
      color="primary"
      onClick={onClick}
      type={type}
      label={label}
      disabled={disabled}
      className={cn(
        "text-white disabled:bg-slate-500 transform transition duration-500 hover:scale-105 gap-6",
        `bg-[${_color}]`,
        className,
      )}
    >
      {Icon ? <Icon className="text-xl mx-2" /> : null}
      {label}
    </Button>
  )
}

export default TextField
