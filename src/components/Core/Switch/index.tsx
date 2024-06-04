
import { ToggleSwitch } from "flowbite-react"

interface ISwitch {
  checked: boolean
  onChange: () => void
  label: string
}

const Switch = ({ checked, onChange, label }: ISwitch) => {
  return <ToggleSwitch checked={checked} label={label} onChange={onChange} />
}

export default Switch
