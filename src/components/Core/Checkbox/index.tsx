import cn from "classnames"
import { Checkbox as CB } from "flowbite-react"

interface ICheckBox {
  name: string
  onSelect?: any
  className?: string
  checked?: boolean
}

const Checkbox = ({ name, className, onSelect, checked }: ICheckBox) => {
  return <CB name={name} className={cn("", className)} onChange={onSelect} checked={checked} />
}

export default Checkbox
