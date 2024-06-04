
import { Label, Radio as Rd } from "flowbite-react"

interface IRadio {
  label: string
  name: string
  value: any
}

const Radio = ({ label, name, value }: IRadio) => {
  return (
    <div className="flex items-center gap-2">
      <Rd name={name} value={value} />
      <Label htmlFor={name}>{label}</Label>
    </div>
  )
}

export default Radio
