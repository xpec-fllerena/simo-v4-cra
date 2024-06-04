import { Select, TextField, TrashButton } from "components/Core"
import { Controller } from "react-hook-form"

interface ICustomFields {
  index: number
  control: any
  custom: any
  errors: any
}

const CustomFields = ({ index, control, custom, errors }: ICustomFields) => {
  const remove_custom = () => custom.remove(index)

  const CUSTOM_TYPE = [
    { id: 1, label: "string", value: "string" },
    { id: 2, label: "boolean", value: "boolean" },
    { id: 3, label: "number", value: "number" },
    { id: 4, label: "array-string", value: "array-string" },
  ]

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-row items-center justify-between p-2">
        <h4 className="">Custom {Number(index + 1)}</h4>
        <TrashButton onClick={remove_custom} />
      </div>
      <div className="w-full border-b border-[#919191]"></div>
      <Controller
        control={control}
        name={`custom[${index}].key`}
        defaultValue={custom.fields[index].key}
        render={({ field: { onChange, value } }) => <TextField label="Clave" onChange={onChange} value={value} />}
      />
      <div className="flex flex-row gap-4">
        <Controller
          name={`custom[${index}].type`}
          defaultValue={custom.fields[index].type}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select label="Tipo" options={CUSTOM_TYPE} onChange={onChange} value={value} />
          )}
        />
        <Controller
          control={control}
          name={`custom[${index}].value`}
          defaultValue={custom.fields[index].value}
          render={({ field: { onChange, value } }) => <TextField label="Valor" onChange={onChange} value={value} />}
        />
      </div>
    </div>
  )
}

export default CustomFields
