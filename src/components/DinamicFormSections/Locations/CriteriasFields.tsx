import { Select, TextField, TrashButton } from "components/Core"
import { Controller } from "react-hook-form"

interface ICriteriasFields {
  index: number
  control: any
  criterias: any
  errors: any
  watch: any
}

const CriteriasFields = ({ index, control, criterias, errors, watch }: ICriteriasFields) => {
  const remove_criteria = () => criterias.remove(index)
  const type = watch(`criterias[${index}].type`)

  const LOCATION_TYPE = [
    { id: 1, label: "Texto", value: "text" },
    { id: 2, label: "Coordenadas", value: "coordinates" },
  ]

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-row items-center justify-between p-2">
        <h4 className="">criteria{Number(index + 3)}</h4>
        <TrashButton onClick={remove_criteria} />
      </div>
      <div className="w-full border-b border-[#919191]"></div>
      <Controller
        name={`criterias[${index}].type`}
        defaultValue={criterias.fields[index].type}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select label="Tipo" options={LOCATION_TYPE} onChange={onChange} value={value} />
        )}
      />
      {type?.value === "text" ? (
        <Controller
          control={control}
          name={`criterias[${index}].value`}
          defaultValue={criterias.fields[index].key}
          render={({ field: { onChange, value } }) => <TextField label="Valor" onChange={onChange} value={value} />}
        />
      ) : (
        <div className="flex flex-row gap-4">
          <Controller
            control={control}
            name={`criterias[${index}].value.lat`}
            defaultValue={criterias.fields[index].key}
            render={({ field: { onChange, value } }) => <TextField label="Latitud" onChange={onChange} value={value} />}
          />
          <Controller
            control={control}
            name={`criterias[${index}].value.lon`}
            defaultValue={criterias.fields[index].value}
            render={({ field: { onChange, value } }) => (
              <TextField label="Longitud" onChange={onChange} value={value} />
            )}
          />
        </div>
      )}
    </div>
  )
}

export default CriteriasFields
