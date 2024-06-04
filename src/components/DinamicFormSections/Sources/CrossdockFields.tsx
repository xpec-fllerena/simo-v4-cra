
import { Select, TextField, TrashButton } from "components/Core"
import { Controller } from "react-hook-form"
import { UNIT_TIME } from "constants/FORM_CONSTANTS"

interface ICrossdockFields {
  index: number
  control: any
  crossdock: any
  errors: any
}

const CrossdockFields = ({ index, control, crossdock, errors }: ICrossdockFields) => {
  const remove_crossdock = () => crossdock.remove(index)

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-row items-center justify-between p-2">
        <h4 className="">Crossdock {Number(index + 1)}</h4>
        <TrashButton onClick={remove_crossdock} />
      </div>
      <div className="w-full border-b border-[#919191]"></div>
      <Controller
        name={`crossdock[${index}].productType`}
        defaultValue={crossdock.fields[index].daysOfWeek}
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
          name={`crossdock[${index}].value`}
          defaultValue={crossdock.fields[index].value}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField label="Cantidad de tiempo" type="number" onChange={onChange} value={value} />
          )}
        />
        <Controller
          name={`crossdock[${index}].unit`}
          defaultValue={crossdock.fields[index].unit}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select label="Unidad de tiempo" options={UNIT_TIME} onChange={onChange} value={value} />
          )}
        />
      </div>
    </div>
  )
}

export default CrossdockFields
