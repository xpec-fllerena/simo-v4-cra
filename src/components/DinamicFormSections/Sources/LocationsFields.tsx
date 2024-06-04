import { Select, TextField, TrashButton } from "components/Core"
import { Controller } from "react-hook-form"

interface ILocationFields {
  index: number
  control: any
  location: any
  errors: any
}

const LocationFields = ({ index, control, location, errors }: ILocationFields) => {
  const remove_location = () => location.remove(index)

  const TYPE = [
    { id: 1, label: "string", value: "string" },
    { id: 2, label: "boolean", value: "boolean" },
    { id: 3, label: "number", value: "number" },
    { id: 4, label: "array-string", value: "array-string" },
  ]

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-row items-center justify-between p-2">
        <h4 className="">Ubicación {Number(index + 1)}</h4>
        <TrashButton onClick={remove_location} />
      </div>
      <div className="w-full border-b border-[#919191]"></div>
      <Controller
        control={control}
        name={`location[${index}].key`}
        defaultValue={location.fields[index].key}
        render={({ field: { onChange, value } }) => <TextField label="Clave" onChange={onChange} value={value} />}
      />
      <div className="flex flex-row gap-4">
        <Controller
          name={`location[${index}].type`}
          defaultValue={location.fields[index].type}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              label="Tipo"
              options={TYPE}
              onChange={onChange}
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          name={`location[${index}].value`}
          defaultValue={location.fields[index].value}
          render={({ field: { onChange, value } }) => <TextField label="Valor" onChange={onChange} value={value} />}
        />
      </div>
    </div>
  )
}

export default LocationFields
