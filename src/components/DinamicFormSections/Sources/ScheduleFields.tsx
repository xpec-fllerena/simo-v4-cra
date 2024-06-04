
import { AddButton, Select, TextField, TrashButton } from "components/Core"
import { Controller, useFieldArray } from "react-hook-form"
import { HOURS_OF_DAY, SHIPPING_TYPES, UNIT_TIME } from "constants/FORM_CONSTANTS"

interface IScheduleFields {
  index: number
  control: any
  schedule: any
  errors: any
}

const ScheduleFields = ({ index, control, schedule, errors }: IScheduleFields) => {
  const remove_schedule = () => schedule.remove(index)
  const slots = useFieldArray({ control, name: `schedule[${index}].slots` })
  const remove_slot = (_i: any) => slots.remove(_i)
  const add_slot = () => slots.append({ from: "", to: "", label: "" })

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-row items-center justify-between p-2">
        <h4 className="">Agendamiento {Number(index + 1)}</h4>
        <TrashButton onClick={remove_schedule} />
      </div>
      <div className="w-full border-b border-[#919191]"></div>
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <Controller
          name={`schedule[${index}].deliveryType`}
          defaultValue={schedule.fields[index].deliveryType}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select label="Tipo de entrega" options={[]} onChange={onChange} value={value} />
          )}
        />
        <Controller
          name={`schedule[${index}].shippingType`}
          defaultValue={schedule.fields[index].shippingType}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select label="Tipo de despacho" multi options={SHIPPING_TYPES} onChange={onChange} value={value} />
          )}
        />
      </div>
      <Controller
        name={`schedule[${index}].productType`}
        defaultValue={schedule.fields[index].productType}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField label="Tipo de producto" onChange={onChange} value={value} />
        )}
      />
      <div className="w-full flex flex-row items-center justify-start px-2">
        <h4 className="">Tiempo de preparación en tienda </h4>
      </div>
      <div className="w-full border-b border-[#919191]"></div>
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <Controller
          name={`schedule[${index}].leadtime.value`}
          defaultValue={schedule.fields[index].leadtime.value}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField label="Cantidad de tiempo (leadtime)" type="number" onChange={onChange} value={value} />
          )}
        />
        <Controller
          name={`schedule[${index}].leadtime.unit`}
          defaultValue={schedule.fields[index].leadtime.unit}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select label="Unidad de tiempo (leadtime)" options={UNIT_TIME} onChange={onChange} value={value} />
          )}
        />
      </div>
      <div className="w-full flex flex-row items-center justify-between px-2">
        <h4 className="">Slots horarios de entrega </h4>
        <AddButton onClick={add_slot} />
      </div>
      <div className="w-full border-b border-[#919191]"></div>
      {slots.fields.map((slot, _i) => {
        return (
          <div key={slot.id} className="w-full flex flex-col lg:flex-row items-center justify-between lg:justify-center gap-4">
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
              <Controller
                name={`schedule[${index}].slots[${_i}].from`}
                defaultValue={schedule.fields[index].slots[_i]?.from}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select label="Inicio del día" options={HOURS_OF_DAY} onChange={onChange} value={value} />
                )}
              />
              <Controller
                name={`schedule[${index}].slots[${_i}].to`}
                defaultValue={schedule.fields[index].slots[_i]?.to}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select label="Fín del día" options={HOURS_OF_DAY} onChange={onChange} value={value} />
                )}
              />
              <Controller
                name={`schedule[${index}].slots[${_i}].label`}
                defaultValue={schedule.fields[index].slots[_i]?.label}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField label="Label" onChange={onChange} value={value} />
                )}
              />
            </div>
            <TrashButton onClick={() => slots.remove(_i)} />
          </div>
        )
      })}
    </div>
  )
}

export default ScheduleFields
