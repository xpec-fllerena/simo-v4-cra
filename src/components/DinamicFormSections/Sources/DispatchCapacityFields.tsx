
import { Select, TextField, TrashButton } from "components/Core"
import { Controller } from "react-hook-form"
import { DAYS_OF_WEEK_NUMBER } from "constants/FORM_CONSTANTS"

interface IDispatchCapacityFields {
  index: number
  control: any
  dispatch_capacity: any
  errors: any
}

const DispatchCapacityFields = ({ index, control, dispatch_capacity, errors }: IDispatchCapacityFields) => {
  const remove_dispatch_capacity = () => dispatch_capacity.remove(index)

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-row items-center justify-between p-2">
        <h4 className="">Capacidad de despacho {Number(index + 1)}</h4>
        <TrashButton onClick={remove_dispatch_capacity} />
      </div>
      <div className="w-full border-b border-[#919191]"></div>
      <Controller
        name={`dispatchCapacity[${index}].daysOfWeek`}
        defaultValue={dispatch_capacity.fields[index].daysOfWeek}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select label="Dias de la semana" multi options={DAYS_OF_WEEK_NUMBER} onChange={onChange} value={value} />
        )}
      />
      <Controller
        name={`dispatchCapacity[${index}].deliveryType`}
        defaultValue={dispatch_capacity.fields[index].deliveryType}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select label="Tipo de entrega" options={[]} onChange={onChange} value={value} />
        )}
      />
      <Controller
        name={`dispatchCapacity[${index}].productType`}
        defaultValue={dispatch_capacity.fields[index].productType}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField label="Tipo de producto" onChange={onChange} value={value} />
        )}
      />
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <Controller
          name={`dispatchCapacity[${index}].overCapacity`}
          defaultValue={dispatch_capacity.fields[index].overCapacity}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField label="Porcentaje de sobreocupación" type="number" onChange={onChange} value={value} />
          )}
        />
        <Controller
          name={`dispatchCapacity[${index}].capacity`}
          defaultValue={dispatch_capacity.fields[index].capacity}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField label="Capacidad" type="number" onChange={onChange} value={value} />
          )}
        />
      </div>
    </div>
  )
}

export default DispatchCapacityFields
