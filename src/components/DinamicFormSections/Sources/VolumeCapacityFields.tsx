
import { Select, TextField, TrashButton } from "components/Core"
import { Controller } from "react-hook-form"
import { DAYS_OF_WEEK_NUMBER } from "constants/FORM_CONSTANTS"

interface IVolumeCapacityFields {
  index: number
  control: any
  volume_capacity: any
  errors: any
}

const VolumeCapacityFields = ({ index, control, volume_capacity, errors }: IVolumeCapacityFields) => {
  const remove_volume_capacity = () => volume_capacity.remove(index)

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-row items-center justify-between p-2">
        <h4 className="">Capacidad de volúmen {Number(index + 1)}</h4>
        <TrashButton onClick={remove_volume_capacity} />
      </div>
      <div className="w-full border-b border-[#919191]"></div>
      <Controller
        name={`volumeCapacity[${index}].daysOfWeek`}
        defaultValue={volume_capacity.fields[index].daysOfWeek}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select label="Dias de la semana" multi options={DAYS_OF_WEEK_NUMBER} onChange={onChange} value={value} />
        )}
      />
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <Controller
          name={`volumeCapacity[${index}].overCapacity`}
          defaultValue={volume_capacity.fields[index].overCapacity}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField label="Porcentaje de sobreocupación" type="number" onChange={onChange} value={value} />
          )}
        />
        <Controller
          name={`volumeCapacity[${index}].capacity`}
          defaultValue={volume_capacity.fields[index].capacity}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField label="Capacidad" type="number" onChange={onChange} value={value} />
          )}
        />
      </div>
    </div>
  )
}

export default VolumeCapacityFields
