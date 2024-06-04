
import { Select, Switch, TextField, TrashButton } from "components/Core"
import { Controller } from "react-hook-form"
import { HOURS_OF_DAY } from "constants/FORM_CONSTANTS"

interface ISlotsFields {
  index: number
  control: any
  slot: any
  errors: any
}

const SlotsFields = ({ index, control, slot, errors }: ISlotsFields) => {
  const remove_slot = () => slot.remove(index)

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-row items-center justify-between p-2">
        <h4 className="">Slot {Number(index + 1)}</h4>
        <TrashButton onClick={remove_slot} />
      </div>
      <div className="w-full border-b border-[#919191]"></div>
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <Controller
          name={`slots[${index}].label`}
          defaultValue={slot.fields[index].label}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField label="Etiqueta slot" onChange={onChange} value={value} />
          )}
        />
      </div>
      <div className="w-full flex flex-row items-center justify-start px-2">
        <h4 className="">Rango de horario </h4>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <Controller
          name={`slots[${index}].from`}
          defaultValue={slot.fields[index].from}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select label="Inicio" options={HOURS_OF_DAY} onChange={onChange} value={value} />
          )}
        />
        <Controller
          name={`slots[${index}].to`}
          defaultValue={slot.fields[index].to}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select label="Fín" options={HOURS_OF_DAY} onChange={onChange} value={value} />
          )}
        />
      </div>
    </div>
  )
}

export default SlotsFields
